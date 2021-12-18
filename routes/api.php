<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthApi\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) { return $request->user(); });

//Route::get('Users',function() {return Users::all();});




Route::group(['middleware' => ['jwt.verify']], function() {


});


Route::group([
  'middleware' => 'api',
  'prefix' => 'auth'
], function ($router) {
  Route::get('Profile', [AuthController::class, 'profile']);
  Route::post('Login', [AuthController::class, 'login']);
  Route::get('Logout', [AuthController::class, 'logout']);
});





    

    
    