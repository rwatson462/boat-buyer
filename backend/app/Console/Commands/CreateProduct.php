<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;

class CreateProduct extends Command
{
    protected $signature = 'product:create';

    protected $description = 'Creates a new product';

    public function handle()
    {
        $name = $this->ask('Name of product');
        $price = $this->ask('Price (in pence)');

        Product::create(
            $name,
            $price
        );
        
        return Command::SUCCESS;
    }
}
