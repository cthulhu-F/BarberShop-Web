<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Item;
use App\Models\Categorie;

class ItemController extends Controller
{
    
    //START API FUNCTION RESOURCE PRODUCT

    public function createItem(Request $request){
        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'name' => ['required','string','min:2','max:80'],
            'sku' => ['required','string','max:150'],
            'img' => ['required','mimes:jpeg,jpg,png,gif','max:10000',],
            'description' => ['required','string','max:80'],
            'stock' => ['required','numeric'],
            'price' => ['required','numeric'],
            'categories_id' => ['required','numeric']
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $image = $request->file('img');
        $image->move('../resources/asset/product/',$image->getClientOriginalName());
        $urlImg = './'.$image->getClientOriginalName();

        $item = Item::create([
            'name' => $request->name,
            'sku' => $request->sku,
            'img' => $urlImg,
            'description' => $request->description,
            'stock' => $request->stock,
            'price' => $request->price,
            'categories_id' => $request->categories_id
        ]);


        return response()->json([
            'message' => 'Producto registrado con exito',
            'user' => $item
        ], 201);

    }

    public function UpdateItem(Request $request){
        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'id' => ['numeric'],
            'name' => ['string','min:2','max:80'],
            'sku' => ['string','max:150'],
            'img' => ['mimes:jpeg,jpg,png,gif','max:10000',],
            'description' => ['string','max:80'],
            'stock' => ['numeric'],
            'price' => ['numeric'],
            'categories_id' => ['numeric'],
            'status' => ['string']
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $id = $request->id;

        if(!Item::find($id)){
            return response()->json([
                'message' => 'El producto no existe',
            ], 400);
        } 

        $item = Item::find($id);

        if($request->name){
            $item->name = $request->name;
        }

        if($request->sku){
            $item->sku = $request->sku;
        }

        if($request->img){

            $image = $request->file('img');
            $image->move('../resources/asset/product/',$image->getClientOriginalName());
            $urlImg = './'.$image->getClientOriginalName();

            $item->img = $urlImg;

        }

        if($request->description){
            $item->description = $request->description;
        }

        if($request->stock){
            $item->stock = $request->stock;
        }

        if($request->price){
            $item->price = $request->price;
        }

        if($request->categories_id){
            $item->categories_id = $request->categories_id;
        }

        if($request->status){
            $item->status = $request->status;
        }

        $item->save();

        return response()->json([
            'message' => 'Cambios realizados con exito',
            'user' => $item
        ], 201);
    }
    
    public function showItem(){
        return Item::all();
    }

    //END API RESOURCE PRODUCT

    //START API RESOURCE CATEGORY

    public function createCategory(Request $request){

        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'name' => ['required','string','min:2','max:80'],
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $category = Categorie::create([
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Cambios realizados con exito!',
            'content' => $category
        ], 201);

    }

    public function updateCategory(Request $request){
        
        $request->user()->authorizeRoles(['admin']);

        $validate = Validator::make($request->all(),[
            'id' => ['numeric'],
            'name' => ['string','max:80'],
            'status' => ['string'],
        ]);

        if($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }

        $id = $request->id;

        if(!Categorie::find($id)){
            return response()->json([
                'message' => 'El producto no existe',
            ], 400);
        } 

        $category = Categorie::find($id);

        if($request->name){
            $category->name = $request->name;
        }

        if($request->status){
            $category->status = $request->status;
        }

        $category->save();

        return response()->json([
            'message' => 'Categoria creada con exito!',
            'content' => $category
        ], 201);

    }

    public function showCategorie(){

        return Categorie::all();
    }
    
    //END API RESOURCE CATEGORY

}
