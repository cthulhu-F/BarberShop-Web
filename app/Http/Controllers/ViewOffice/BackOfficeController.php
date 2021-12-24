<?php

namespace App\Http\Controllers\ViewOffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BackOfficeController extends Controller
{

    public function turn(Request $request)
    {   
        $request->user()->authorizeRoles(['admin']);

        return view('viewBackOffice/turn');
    }

    public function sale(Request $request)
    {   
        $request->user()->authorizeRoles(['admin']);

        return view('viewBackOffice/sale');
    }

    public function inventory(Request $request)
    {   
        $request->user()->authorizeRoles(['admin']);

        return view('viewBackOffice/inventory');
    }

    public function user(Request $request)
    {   
        $request->user()->authorizeRoles(['admin']);

        return view('viewBackOffice/user');
    }

    public function setting(Request $request)
    {   
        $request->user()->authorizeRoles(['admin']);

        return view('viewBackOffice/setting');
    }
    
}
