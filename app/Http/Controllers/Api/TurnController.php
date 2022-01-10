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

    //START API FUNCTION RESOURCE ORDER TURN

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

    //END API FUNCTION RESOURCE ORDER TURN

    //START API FUNCTION RESOURCE CONFIG DAY

    public function createConfigDay(Request $request){

        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'days' => ['required','string'],
            'name' => ['required','string','unique:configturns','max:50','min:1'],
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $configDay = ConfigDay::create([
            'days' => $request->days,
        ]);

        return response()->json([
            'message' => 'Days registered',
            'user' => $configDay
        ], 201);
        
    }

    public function updateConfigDay(Request $request){

        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'id' => ['required'],
            'days' => ['required'],
        ]);

        
        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
         }
 
         $id = $request->id;
         $days = $request->days;

         if(!ConfigDay::find($id)){
            return response()->json([
                'message' => 'Error',
            ], 400);
        } 

        $configDay = ConfigDay::find($id);

        $configDay->days = $days;

        $configDay->save();

        return response()->json([
            'message' => 'order turn successfully update',
        ], 201);
    }

    public function showConfigDay(Request $request){
        return ConfigDay::all();
    } 

    //END API FUNCTION RESOURCE CONFIG DAY
    
    //START API FUNCTION RESOURCE CONFIG TURN

    public function createConfigTurn(Request $request){

        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'name' => ['required','string','unique:configturns','max:50','min:1'],
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $last_configDay = ConfigDay::all('id')->max('id');

        $configTurn = ConfigTurn::create([
            'name' => $request->name,
            'configDay_id' => $last_configDay,
        ]);

        return response()->json([
            'message' => 'Days registered',
            'user' => $last_configDay
        ], 201);
    }

    public function updateConfigTurn(Request $request){

        $request->user()->authorizeRoles(['admin']);
        
        $validate = Validator::make($request->all(),[
            'id' => ['required'],
            'status' => ['required','string'],
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $id = $request->id;
        $status = $request->status;

        if(!ConfigDay::find($id)){
            return response()->json([
                'message' => 'Error',
            ], 400);
        } 
        
        if(!ConfigTurn::find($id)){
            return response()->json([
                'message' => 'Error',
            ], 400);
        } 

        $configTurn = ConfigTurn::find($id);

        $configTurn->status = $status;

        $configTurn->save();


        $configDay = ConfigDay::find($id);

        $configDay->status = $status;

        $configDay->save();

        return response()->json([
            'message' => 'order turn successfully update',
        ], 201);
    }

    public function showConfigTurn(Request $request){
        return ConfigTurn::all();
    }

    //END API FUNCTION RESOURCE CONFIG TURN

      
}
