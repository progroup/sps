<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function faqs()
    {
        return $this->belongsToMany(Faq::class);
    }

    public function getRouteKeyName()
    {
        return 'name';
    }
}
