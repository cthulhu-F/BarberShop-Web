<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\View\HomeController;
use App\Http\Controllers\ViewOffice\BackOfficeController;

/*
|--------------------------------------------------------------------------
| Web Routes Auth Access
|--------------------------------------------------------------------------
*/

Route::get('/login', [HomeController::class, 'login']);


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

// Route::get('/', function () {
//     return view('index');
// });

//Route::view('/', 'home')->name('home');
//Route::view('calendar', 'calendar')->name('calendar');
//Route::view('shop', 'shop')->name('shop');

Route::get('/', function () {
    return view('index');
});

Route::get('/shop', function () {
    return view('shop');
});

Route::get('/shoppingCart', function () {
    return view('shoppingCart');
});

Route::get('/shop/{value}', function ($input) {
    return view('shop', ["value" => $input]);
});

Route::get('/product/{value}', function ($value) {
    return view('item', ["value" => $value]);
});

// BACKOFFICE ROUTES 

Route::get('/backOffice/turns', function () {
    return view('viewBackOffice/turns');
});

Route::get('/backOffice/sales', function () {
    return view('viewBackOffice/sales');
});

Route::get('/backOffice/inventory', function () {
    return view('viewBackOffice/inventory');
});

Route::get('/backOffice/users', function () {
    return view('viewBackOffice/users');
});

Route::get('/backOffice/settings', function () {
    return view('viewBackOffice/settings');
});


Route::get('/login', function () {
    return view('login');
});

