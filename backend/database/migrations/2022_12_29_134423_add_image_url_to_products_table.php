<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('image_url')->nullable();
        });

        $sql = <<<SQL

            UPDATE products
            SET image_url = 
                CONCAT('https://picsum.photos/seed/', id, '/1280/720')

        SQL;

        DB::update($sql);
    }

    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('image_url');
        });
    }
};
