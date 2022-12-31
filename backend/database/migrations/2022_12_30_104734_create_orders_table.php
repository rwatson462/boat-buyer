<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->enum('state', [
                'new',
                'accepted',
                'packed',
                'shipped',
                'delivered',
            ])->default('new');
            $table->boolean('paid')->default(false);
            $table->json('order_items');
            $table->integer('total_price');
            $table->integer('tax_rate');
            $table->integer('shipping_method');
            $table->integer('shipping_price');
            $table->string('delivery_address')->nullable(); // for store pick-up, no address needed
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
