<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderTurn extends Model
{
    use HasFactory;

    protected $table='order_turn';



    protected $fillable= 
    [
        'id',
        'name',  
        'name_client',
        'email_client',
        'phone_client',
        'status',
        'date',
        'time',
        'turn_duration'
    ];

    protected $casts = [
        'date' => 'date:d-m-Y',
        'time' => 'datetime:H:i',
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];
}
