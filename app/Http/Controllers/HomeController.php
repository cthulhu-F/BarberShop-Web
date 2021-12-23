<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
//use App\Models\User;

class HomeController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index(Request $request)
    {   

        $request->user()->authorizeRoles(['user','admin']);

        $user = User::find(2);
        return $user->name;
    }

}
