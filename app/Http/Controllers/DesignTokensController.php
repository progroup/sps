<?php

namespace App\Http\Controllers;

use App\DesignToken;
use Illuminate\Http\Request;

class DesignTokensController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('@videa.design-tokens.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DesignToken  $designToken
     * @return \Illuminate\Http\Response
     */
    public function show(DesignToken $designToken)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\DesignToken  $designToken
     * @return \Illuminate\Http\Response
     */
    public function edit(DesignToken $designToken)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DesignToken  $designToken
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DesignToken $designToken)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DesignToken  $designToken
     * @return \Illuminate\Http\Response
     */
    public function destroy(DesignToken $designToken)
    {
        //
    }
}
