<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchCatalogController extends Controller
{
    public function search(Request $request)
    {
        $query = DB::table('products');

        if ($name = $request->input('name')) {
            $query->where('name', 'like', "%$name%");
        }

        return $query->get();
    }
}
