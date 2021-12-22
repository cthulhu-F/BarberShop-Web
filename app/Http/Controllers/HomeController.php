<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
//use App\Models\User;

class HomeController extends Controller
{

    

    public function index(Request $request)
    {   
        //$user = JWTAuth::parseToken()->authenticate();
        $user = User::find(2);
        return $user->name;
    }

}
