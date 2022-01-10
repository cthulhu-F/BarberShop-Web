<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Models\RoleUser;
use App\Models\Role;
use App\Models\User;

class UserController extends Controller
{
    
    //START API FUNCTION RESOURCE USER ROLE

    public function showUser(Request $request){

        $request->user()->authorizeRoles(['admin']);
        return User::all();
    }

    public function showRole(Request $request){

        $request->user()->authorizeRoles(['admin']);
        return Role::all();
    }

    public function showRoleUser(Request $request){

        $request->user()->authorizeRoles(['admin']);
        return RoleUser::all();
    }

    //END API FUNCTION RESOURCE CONFIG DAY
    
}
