<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfigTurn extends Model
{
    use HasFactory;

    protected $table='configturns';



    protected $fillable= 
    [
        'id',
        'name', 
        'configDay_id',
        'created_at',
        'updated_at',
        'status'
    ];
}
