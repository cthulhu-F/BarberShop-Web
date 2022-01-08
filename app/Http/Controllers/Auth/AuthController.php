<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\AuthRequest;


use App\Models\Role;
use App\Models\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    
    public function register(Request $request)
    {   
        $request->user()->authorizeRoles(['admin']);
        
        $validate = Validator::make($request->all(),[
            'name' => ['required','string','min:2','max:100'],
            'email' => ['required','string','email','unique:users','max:100'],
            'password' => ['required','string','confirmed','min:6'],
            'phone' => ['required','string'],
            'role' => ['required','string'],
        ]);
        
        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone
        ]);

        $user_role = $request->role;

        $user->roles()->attach(Role::where('name', $user_role)->first());   
        
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
        
    }


    public function login(Request $request)
    {

    $validate = Validator::make($request->all(),[
        'email' => ['required','email','string'],
        'password' => ['required','string','min:6']
    ]);

    if($validate->fails()) {
        return response()->json($validate->errors(), 400);
    }

    $credentials = ([
        'email' => $request->email,
        'password' => $request->password
    ]);

    if(Auth::attempt($credentials)){
    $request->session()->regenerate();

    return  response()->json([
        'message' => 'Credenciales correctas',
        'url' => 'backOffice/turn'
        ], 200);
    } 

   return  response()->json([
    'message' => 'Verifique su email o contraseña ingresados',
    'user' => $credentials
    ], 201);

    }
}
