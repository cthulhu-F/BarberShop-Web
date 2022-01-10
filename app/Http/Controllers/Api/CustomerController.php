<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\GlobalImg;
use App\Models\Customer;

class CustomerController extends Controller
{

    //START API RESOURCE CUSTOMER

    public function updateCustomer(Request $request){
        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'id' => ['required','numeric'],
            'name' => ['string','min:6','max:80'],
            'direction' => ['string','max:150'],
            'phone' => ['string','max:80'],
            'email' => ['string','email','max:150'],
            'social_networks' => ['string'],
            'status' => ['string']
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $id = $request->id;

        if(!Customer::find($id)){
            return response()->json([
                'message' => 'El dato no existe',
            ], 400);
        } 

        $customer = Customer::find($id);

        if($request->name){
            $customer->name = $request->name;
        }

        if($request->direction){
            $customer->direction = $request->direction;
        }

        if($request->phone){
            $customer->phone = $request->phone;
        }

        if($request->email){
            $customer->email = $request->email;
        }

        if($request->social_networks){
            $customer->social_networks = $request->social_networks;
        }

        if($request->status){
            $customer->status = $request->status;
        }

        $customer->save();

        return response()->json([
            'message' => 'Actualizado con exito!',
            'date' => $customer
        ], 201);
    }

    public function showCustomer(Request $request){

        return Customer::all();
    }

    //END API RESOURCE CUSTOMER
    
    //START API RESOURCE GLOBAL IMG

    public function updateGlobalImg(Request $request){
        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'name' => ['required','string','min:6','max:80'],
            'img' => ['mimes:jpeg,jpg,png,gif','max:10000',],
            'status' => ['string']
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $name = $request->name;

        if(!GlobalImg::where('name', "LIKE", $name)->first()){
            return response()->json([
                'message' => 'El producto no existe',
            ], 400);
        } 

        $globalImg = GlobalImg::where('name', "LIKE", $name)->first();

        if($request->img){

            $image = $request->file('img');
            $image->move('../resources/asset/marca/',$image->getClientOriginalName());
            $urlImg = './'.$image->getClientOriginalName();

            $globalImg->url = $urlImg;
        }

        if($request->status){
            $globalImg->status = $request->status;
        }

        $globalImg->save();

        return response()->json([
            'message' => 'Actualizado con exito!',
            'date' => GlobalImg::all()
        ], 201);
    }

    public function showGlobalImg(Request $request){

        return GlobalImg::all();
    }

    //END API RESOURCE GLOBAL 
    
}
