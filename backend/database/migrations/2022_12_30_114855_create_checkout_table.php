<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('checkout', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('session_id');
            $table->json('items');
            $table->integer('total_cost');
            $table->boolean('order_created')->default(false);
        });
    }

    public function down()
    {
        Schema::dropIfExists('checkout');
    }
};
