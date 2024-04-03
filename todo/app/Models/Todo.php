<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


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
    public function typeStatus(): HasMany
    {
        return $this->hasMany(TypeStatus::class, 'id');
    }
};
