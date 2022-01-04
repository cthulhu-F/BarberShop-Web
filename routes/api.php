<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\TurnController;
use App\Http\Controllers\PDF\InvoiceController;


/*
|--------------------------------------------------------------------------
| API Routes Auth
|--------------------------------------------------------------------------
*/

Route::group([
  'middleware' => 'auth',
], function ($router) {

  Route::post('Register', [AuthController::class, 'register']);
  Route::get('ShowOrderTurn', [TurnController::class, 'showOrderTurn']);
  Route::put('UpdateOrderTurn', [TurnController::class, 'updateOrderTurn']);

});






/*
|--------------------------------------------------------------------------
| API Routes Access
|--------------------------------------------------------------------------
*/

Route::post('Login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| API Routes Item
|--------------------------------------------------------------------------
*/

Route::get('Item', [ItemController::class, 'item']);

/*
|--------------------------------------------------------------------------
| API Routes Turn
|--------------------------------------------------------------------------
*/

Route::post('CreateOrderTurn', [TurnController::class, 'createOrderTurn']);

Route::get('ShowConfigTurn', [TurnController::class, 'showConfigTurn']);

Route::get('ShowConfigDay', [TurnController::class, 'showConfigDay']);

Route::get('ShiftInvoice', [InvoiceController::class, 'shiftInvoice']);




    

    
    