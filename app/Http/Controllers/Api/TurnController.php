<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\OrderTurn;
use App\Models\ConfigDay;
use App\Models\ConfigTurn;

class TurnController extends Controller
{

    

    public function createOrderTurn(Request $request){
        
        $validate = Validator::make($request->all(),[
            'name' => ['required','string','min:2','max:80'],
            'name_client' => ['required','string','max:100'],
            'email_client' => ['required','string','email','max:150'],
            'phone_client' => ['required','string','max:20','min:7'],
            'date' => ['required','date_format:Y-m-d'],
            'time' => ['required','date_format:H:i'],
            'turn_duration' => ['required']
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $orderturn = OrderTurn::create([
            'name' => $request->name,
            'name_client' => $request->name_client,
            'email_client' => $request->email_client,
            'phone_client' => $request->phone_client,
            'date' => $request->date,
            'time' => $request->time,
            'turn_duration' => $request->turn_duration
        ]);

        
        return response()->json([
            'message' => 'order turn successfully registered',
            'user' => $orderturn
        ], 201);
    }

    public function updateOrderTurn(Request $request){

        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'id' => ['required'],
            'status' => ['required'],
        ]);

        if($validate->fails()) {
           return response()->json($validate->errors(), 400);
        }

        $id = $request->id;
        $status = $request->status;

        

        if(!OrderTurn::find($id)){
            return response()->json([
                'message' => 'Error',
            ], 400);
        } 

        $orderturn = OrderTurn::find($id);

        $orderturn->status = $status;

        $orderturn->save();

        return response()->json([
            'message' => 'order turn successfully update',
        ], 201);

    }

    public function showOrderTurn(Request $request){

        //$request->user()->authorizeRoles(['admin']);

        return OrderTurn::all();

    }

    public function showConfigTurn(Request $request){
        return ConfigTurn::all();
    }

    public function showConfigDay(Request $request){
        return ConfigDay::all();
    }   
}
