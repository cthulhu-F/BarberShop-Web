<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthApi\AuthController;

Route::group([
  'middleware' => 'api',
], function ($router) {
  Route::post('Login', [AuthController::class, 'login']);
  Route::get('Logout', [AuthController::class, 'logout']);
});
