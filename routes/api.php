<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TurnController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\PDF\InvoiceController;



/*
|--------------------------------------------------------------------------
| API Routes Auth
|--------------------------------------------------------------------------
*/

Route::group([
  'middleware' => 'auth',
], function ($router) {

/*
|--------------------------------------------------------------------------
| API Routes User
|--------------------------------------------------------------------------
*/  
  
  Route::post('Register', [AuthController::class, 'register']);

  Route::get('ShowUser', [UserController::class, 'showUser']);
  Route::get('ShowRole', [UserController::class, 'showRole']);
  Route::get('ShowRoleUser', [UserController::class, 'showRoleUser']);

/*
|--------------------------------------------------------------------------
| API Routes Item
|--------------------------------------------------------------------------
*/  
  
  Route::post('CreateProduct', [ItemController::class, 'createItem']);
  Route::post('UpdateProduct', [ItemController::class, 'updateItem']);

  Route::post('CreateCategory', [ItemController::class, 'createCategory']);
  Route::post('UpdateCategory', [ItemController::class, 'updateCategory']);

  Route::get('ShowAllItem', [ItemController::class, 'showAllItem']);
  
/*
|--------------------------------------------------------------------------
| API Routes Turn
|--------------------------------------------------------------------------
*/  

  Route::get('ShowOrderTurn', [TurnController::class, 'showOrderTurn']);
  Route::post('UpdateOrderTurn', [TurnController::class, 'updateOrderTurn']);
  
  Route::post('CreateConfigTurn', [TurnController::class, 'createConfigTurn']);
  Route::post('UpdateConfigTurn', [TurnController::class, 'updateConfigTurn']);

  Route::post('CreateConfigDay', [TurnController::class, 'createConfigDay']);
  Route::post('UpdateConfigDay', [TurnController::class, 'UpdateConfigDay']);

/*
|--------------------------------------------------------------------------
| API Routes Sale
|--------------------------------------------------------------------------
*/    

  Route::post('CreateOrderSale', [SaleController::class, 'createOrderSale']);
  Route::post('UpdateOrderSale', [SaleController::class, 'updateOrderSale']);
  Route::get('ShowOrderSale', [SaleController::class, 'showOrderSale']);


/*
|--------------------------------------------------------------------------
| API Routes Customer
|--------------------------------------------------------------------------
*/

  Route::post('UpdateCustomer', [CustomerController::class, 'updateCustomer']);
  Route::post('UpdateGlobalImg', [CustomerController::class, 'updateGlobalImg']);
});

/*
|--------------------------------------------------------------------------
| API Routes Access
|--------------------------------------------------------------------------
*/

Route::post('Login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| API Routes Customer
|--------------------------------------------------------------------------
*/


Route::get('ShowGlobalImg', [CustomerController::class, 'showGlobalImg']);
Route::get('ShowCustomer', [CustomerController::class, 'showCustomer']);

/*
|--------------------------------------------------------------------------
| API Routes Item
|--------------------------------------------------------------------------
*/

Route::get('ShowUnitItem', [ItemController::class, 'showUnitItem']);
Route::get('ShowActiveItem', [ItemController::class, 'showActiveItem']);
Route::get('ShowCategorie', [ItemController::class, 'showCategorie']);

/*
|--------------------------------------------------------------------------
| API Routes Turn
|--------------------------------------------------------------------------
*/

Route::post('CreateOrderTurn', [TurnController::class, 'createOrderTurn']);

Route::get('ShowActiveTurn', [TurnController::class, 'showActiveTurn']);

Route::get('ShowConfigTurn', [TurnController::class, 'showConfigTurn']);

Route::get('ShowConfigDay', [TurnController::class, 'showConfigDay']);

Route::get('ShiftInvoice', [InvoiceController::class, 'shiftInvoice']);




    

    
    