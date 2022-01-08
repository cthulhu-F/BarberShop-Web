<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfigDay extends Model
{
    use HasFactory;

    protected $table='configday';



    protected $fillable= 
    [
        'id',
        'days',
        'created_at',
        'updated_at',
        'status'
    ];
}
