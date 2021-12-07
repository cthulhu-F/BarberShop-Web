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


Route::get('/product/{value}', function ($value) {
    return view('product', ["value" => $value]);
});
