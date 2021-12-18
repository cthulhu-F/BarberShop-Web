<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject {

    use HasFactory;
    
    protected $table='users';

    protected $fillable= 
    [
        'id',
        'name',  
        'email', 
        'email.verified_at', 
        'phone',
        'password', 
        'remember_token', 
        'created_at',
        'updated_at',
        'status' 
    ];

    public function getJWTIdentifier()
{
	return $this->getKey();
}

public function getJWTCustomClaims()
{
	return [];
}

}
