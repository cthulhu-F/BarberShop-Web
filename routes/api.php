<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthApi\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes Auth
|--------------------------------------------------------------------------
*/

Route::group(['middleware' => ['jwt.verify']], function() {

  Route::get('Profile', [AuthController::class, 'profile']);

  Route::post('Register', [AuthController::class, 'register']);
  
  Route::get('Logout', [AuthController::class, 'logout']);

});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::group([
  'middleware' => 'api',
  'prefix' => 'auth'
], function ($router) {

  Route::post('Login', [AuthController::class, 'login']);

});





    

    
    