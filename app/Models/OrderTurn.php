<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderTurn extends Model
{
    use HasFactory;

    protected $table='orderturns';



    protected $fillable= 
    [
        'id',
        'name',  
        'name_client',
        'email_client',
        'phone_client',
        'date',
        'time',
        'created_at',
        'updated_at',
        'status'
    ];
}
