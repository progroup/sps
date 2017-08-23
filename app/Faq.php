<?php

namespace App;

class Faq extends Model
{
    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
