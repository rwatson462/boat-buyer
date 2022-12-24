<?php

use App\Http\Controllers\Catalog\SearchCatalogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/catalog', [SearchCatalogController::class, 'search']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
