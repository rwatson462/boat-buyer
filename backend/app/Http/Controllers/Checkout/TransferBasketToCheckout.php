<?php

namespace App\Http\Controllers\Checkout;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TransferBasketToCheckout extends Controller
{
    public function transfer(Request $request) {
        return $request->session('basket');
    }
}
