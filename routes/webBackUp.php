<?php

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
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

Route::get('/product/{value}', function ($value) {
    return view('item', ["value" => $value]);
});

// BACKOFFICE ROUTES 


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

Route::get('/backOffice/turns', function () {
    return view('viewBackOffice/turns');
});


Route::get('/auth', function(){
    return view('AuthBlades/home');
});
