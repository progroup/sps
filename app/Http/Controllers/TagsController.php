<?php

namespace App\Http\Controllers;

use App\Tag;
use Illuminate\Http\Request;

class TagsController extends Controller
{
    public function index(Tag $tag)
    {
        $faqs = $tag->faqs;

        return view('faqs.index', compact('faqs'));
    }
}
