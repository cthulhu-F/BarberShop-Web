<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\View\HomeController;
use App\Http\Controllers\ViewOffice\BackOfficeController;

/*
|--------------------------------------------------------------------------
| Web Routes Auth Access
|--------------------------------------------------------------------------
*/

Route::get('/login', [HomeController::class, 'login'])->middleware("guest");


/*
|--------------------------------------------------------------------------
| Web Routes Auth 
|--------------------------------------------------------------------------
*/


Route::group([
  'middleware' => 'auth',
], function ($router) {

  Route::get('/backOffice', [BackOfficeController::class, 'turn']);
  Route::get('/backOffice/turn', [BackOfficeController::class, 'turn']);
  Route::get('/backOffice/sale', [BackOfficeController::class, 'sale']);
  Route::get('/backOffice/inventory', [BackOfficeController::class, 'inventory']);
  Route::get('/backOffice/user', [BackOfficeController::class, 'user']);
  Route::get('/backOffice/setting', [BackOfficeController::class, 'setting']);

});




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [HomeController::class, 'index']);

Route::get('/shop', [HomeController::class, 'shop']);
Route::get('/shop/{search}', [HomeController::class, 'shop']);

Route::get('/shoppingCart', [HomeController::class, 'shoppingCart']);
Route::get('/product/{id}', [HomeController::class, 'item']);
