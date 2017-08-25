<?php

namespace App;

use Laravel\Scout\Searchable;

class Faq extends Model
{
    use Searchable;

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
