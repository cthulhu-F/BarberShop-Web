<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class globalImg extends Model
{
    use HasFactory;

    protected $table='global_img';
    
    protected $fillable= 
    [
        'id',
        'name',  
        'url',
        'status'
    ];

    protected $casts = [
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];

}
