<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;

class HomeController extends Controller
{



    public function login(Request $request)
    {   
        return view('login');
    }

    public function index(Request $request)
    {   

        //$request->user()->authorizeRoles(['user','admin']);
        //$user = User::find(2);
        return view('index');
    }

    public function shop(Request $request)
    {   

        //$request->user()->authorizeRoles(['user','admin']);
        //$user = User::find(2);
        return view('shop');
    }

    public function shoppingCart(Request $request)
    {   

        //$request->user()->authorizeRoles(['user','admin']);
        //$user = User::find(2);
        return view('shoppingCart');
    }

    public function item(Request $request, $id)
    {   
        //$request->user()->authorizeRoles(['user','admin']);
        //$user = User::find(2);
        return view('item');
    }

    public function termsAndConditions(Request $request)
    {  
        return view('dateTerms/termsAndConditions', compact('content'));
    }

    
}
