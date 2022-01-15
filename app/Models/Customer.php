<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table='customer';
    
    protected $fillable= 
    [
        'id',
        'name',  
        'direction',
        'phone',
        'email',
        'social_networks',
        'information',
        'terms_conditions',
        'status',
    ];

    protected $casts = [
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];
}
