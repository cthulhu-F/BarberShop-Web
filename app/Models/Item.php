<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categorie;

class Item extends Model
{
    use HasFactory;

    protected $table='products';



    protected $fillable= 
    [
        'id',
        'name',  
        'sku',
        'img',
        'description',
        'stock',
        'price',
        'categories_id',
        'status'
    ];

    protected $casts = [
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];

    public function categories(){
        return $this->belongsTo('App\Models\Categorie');
    }
    
}
