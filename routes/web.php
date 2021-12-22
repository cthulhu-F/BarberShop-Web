<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes Auth Access
|--------------------------------------------------------------------------
*/


Route::get('/login', function () {
  return view('login');
});

/*
|--------------------------------------------------------------------------
| Web Routes Auth 
|--------------------------------------------------------------------------
*/


Route::get('/', [HomeController::class, 'index']);



/*
Route::get('/', function () {
  return view('index');
});
*/

Route::get('/backOffice/turns', function () {
  return view('viewBackOffice/turns');
});

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/


