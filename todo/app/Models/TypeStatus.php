<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeStatus extends Model
{
    use HasFactory;
    protected $fillable = [
        'type',
    ];
    public $timestamps = false;
    protected $primaryKey = 'id';
};
