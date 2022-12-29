<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class Product {

    public ?Carbon $created_at = null;
    public ?Carbon $updated_at = null;

    public function __construct(
        public int $id,
        ?string $created_at,
        ?string $updated_at,
        public string $name,
        public int $price,
        public ?string $image_url = null
    ) {
        if ($created_at !== null) {
            $this->created_at = Carbon::createFromFormat('Y-m-d H:i:s', $created_at);
        }
        if ($updated_at !== null) {
            $this->updated_at = Carbon::createFromFormat('Y-m-d H:i:s', $updated_at);
        }
    }

    public static function create(
        string $name,
        int $price,
        ?string $image_url = null
    ): self
    {
        $sql = <<<SQL

            INSERT INTO products
            SET
                name = :name,
                price = :price,
                created_at = :created_at,
                image_url = :image_url

        SQL;

        DB::insert($sql, [
            'name' => $name,
            'price' => $price,
            'created_at' => now(),
            'image_url' => $image_url,
        ]);

        $id = DB::getPdo()->lastInsertId();

        return self::load($id);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'name' => $this->name,
            'price' => $this->price,
            'image_url' => $this->image_url,
        ];
    }

    public function save(): void
    {
        $sql = <<<SQL

            UPDATE products
            SET
                created_at = :created_at,
                updated_at = :updated_at,
                name = :name,
                price = :price,
                image_url = :image_url
            WHERE
                id = :id

        SQL;

        DB::update($sql, $this->toArray());
    }

    public static function load(int $id): self
    {
        $sql = <<<SQL

            SELECT *
            FROM products
            WHERE id = :id
            LIMIT 1

        SQL;

        $data = DB::select($sql, [
            'id' => $id
        ]);

        if (count($data) !== 1) {
            throw new \RuntimeException("Cannot find record with id $id");
        }

        // get first element of array
        [$data] = $data;

        return new self(
            $data->id,
            $data->created_at,
            $data->updated_at,
            $data->name,
            $data->price,
            $data->image_url,
        );
    }
}
