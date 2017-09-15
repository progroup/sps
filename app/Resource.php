<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Laravel\Scout\Searchable;
use Spatie\Tags\HasTags;
use Spatie\MediaLibrary\Media;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;

class Resource extends Model implements HasMediaConversions
{
    use Notifiable;
    use Searchable;
    use HasTags;
    use HasMediaTrait;

    public static function last()
    {
        return static::all()->last();
    }

    public function registerMediaConversions(Media $media = null)
    {
        $this->addMediaConversion('thumb')
            ->height(100)
            ->width(100)
            ->greyscale();
    }

    public function toSearchableArray()
    {
        $array = $this->toArray();

        $array['_tags'] = $this->tags->map(function ($tag) {
            return $tag->name;
        });

        return $array;
    }
}
