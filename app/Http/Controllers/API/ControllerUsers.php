<?php

namespace App\Http\Controllers\API;

use App\Models\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ControllerUsers extends Controller
{
    //
    public function index(){
        return Users::all();
    }
}
