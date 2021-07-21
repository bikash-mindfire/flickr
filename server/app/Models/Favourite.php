<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    use HasFactory;

    protected $fillable = [
        'uid',
        'image_url'
    ];

    public $timestamps = false;
    protected $table = 'favourites';
}
