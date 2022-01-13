<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfigTurn extends Model
{
    use HasFactory;

    protected $table='config_turn';



    protected $fillable= 
    [
        'id',
        'name', 
        'configDay_id',
        'status'
    ];

    protected $casts = [
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];
}