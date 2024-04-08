<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'time',
        'day',
        'description',
    ];
    protected $attributes = [
        'deleted'=>true
    ];
    protected $primaryKey = 'id';
    public $timestamps = false;
    public function typeStatus()
    {
        return $this->belongsTo(TypeStatus::class, 'status_id');
    }
};
