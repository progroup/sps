<?php

namespace App;

use Laravel\Scout\Searchable;

class Resource extends Model
{
    use Searchable;

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
