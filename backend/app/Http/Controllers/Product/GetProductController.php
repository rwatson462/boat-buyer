<?php

namespace App\Http\Controllers\Product;

use App\Exceptions\ProductNotFoundException;
use App\Http\Controllers\Controller;
use App\Models\Product;

class GetProductController extends Controller
{
    public function get(int $productId)
    {
        try {
            $product = Product::load($productId);
        }
        catch (ProductNotFoundException $e) {
            return response($e->getMessage(), 404);
        }

        return $product->toArray();
    }
}
