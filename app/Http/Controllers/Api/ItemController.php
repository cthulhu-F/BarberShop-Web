<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Categorie;

class ItemController extends Controller
{
    
    public function item(){

        

        $item = Item::find(2);
        $item->categories->name;

        return Item::all();
    
    }

}
