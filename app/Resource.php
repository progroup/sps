<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Laravel\Scout\Searchable;

class Resource extends Model
{
    use Notifiable;
    use Searchable;

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
