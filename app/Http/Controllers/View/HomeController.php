<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function login(Request $request)
    {   

        //$request->user()->authorizeRoles(['user','admin']);

        return view('login');
    }

    public function index(Request $request)
    {   

        //$request->user()->authorizeRoles(['user','admin']);
        //$user = User::find(2);
        return view('index');
    }
}
