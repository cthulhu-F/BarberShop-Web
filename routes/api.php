<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes Auth
|--------------------------------------------------------------------------
Route::group([
  'middleware' => 'auth',
  'prefix' => 'auth'
], function ($router) {

  //Route::post('Login', [AuthController::class, 'login']);

});
*/

Route::post('Register', [AuthController::class, 'register']);


/*
|--------------------------------------------------------------------------
| API Routes Access
|--------------------------------------------------------------------------
*/

Route::post('Login', [AuthController::class, 'login']);






    

    
    