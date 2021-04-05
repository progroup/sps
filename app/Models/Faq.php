<?php

namespace App\Models;

use Spatie\Tags\HasTags;
use Laravel\Scout\Searchable;

class Faq extends Model
{
    use Searchable;
    use HasTags;

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
