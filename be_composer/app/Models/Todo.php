<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;
    protected $fillable = [
        'name_todo',
        'time',
        'day',
        'description',
    ];
    protected $attributes = [
        'status' => false
    ];
};
