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
        'mo',
        'tu',
        'we',
        'th',
        'fr',
        'sa',
        'su',
        'created_at',
        'updated_at',
        'status'
    ];
}
