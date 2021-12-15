<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{

    protected $table='users';

    protected $fillable=['id','name','role_id','email','phone','password','update_at','status'];

}
