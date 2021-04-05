<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceSearchController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  str  $query
     * @return \Illuminate\Http\Response
     */
    public function show($query)
    {
        return Resource::where('title', 'like', '%'.$query.'%')
          ->orWhere('description', 'like', '%'.$query.'%')->get();
    }
}
