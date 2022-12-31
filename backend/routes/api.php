<?php

use App\Http\Controllers\Catalog\SearchCatalogController;
use App\Http\Controllers\Checkout\TransferBasketToCheckout;
use App\Http\Controllers\Product\GetProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('web')->group(function() {

    Route::get('/catalog', [SearchCatalogController::class, 'search']);
    Route::get('/product/{productId}', [GetProductController::class, 'get']);

    Route::prefix('checkout')->group(function() {
        Route::post('/transfer', [TransferBasketToCheckout::class, 'transfer']);
    });

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

});
