<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {
        return $this->show(request('q'));
    }

    public function show($query)
    {
        return view('@progroup.search.show', compact('query'));
    }
}
