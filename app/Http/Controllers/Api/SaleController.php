<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\OrderSale;

class SaleController extends Controller
{
    
   //START API FUNCTION RESOURCE ORDER SALE

    public function createOrderSale(Request $request){
        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'name' => ['required','string','min:2','max:80'],
            'resumen' => ['required','string'],
            'total' => ['required','numeric'],
            'dataClient' => ['required','string'],
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $order = OrderSale::create([
            'name' => $request->days,
            'resumen' => $request->resumen,
            'total' => $request->total,
            'dataClient' => $request->dataClient
        ]);

        return response()->json([
            'message' => 'Orden de venta creado con exito',
            'user' => $order
        ], 201);
    }

    public function updateOrderSale(Request $request){
        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'id' => ['required','numeric'],
            'status' => ['required','string','max:150'],
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $id = $request->id;

        if(!OrderSale::find($id)){
            return response()->json([
                'message' => 'La orden de venta no existe',
            ], 400);
        } 

        $order = OrderSale::find($id);

        if($request->status){
            $order->status = $request->status;
        }

        $order->save();

        return response()->json([
            'message' => 'Cambios realizados con exito',
            'user' => $order
        ], 201);
    }

    public function showOrderSale(Request $request){
        $request->user()->authorizeRoles(['admin']);

        return OrderSale::all();
    }

    //END API FUNCTION RESOURCE ORDER SALE

}
