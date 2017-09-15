<?php

namespace App\Http\Controllers;

use App\Typography;
use Illuminate\Http\Request;

class TypographyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('@videa.typography.index');
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
     * @param  \App\Typography  $typography
     * @return \Illuminate\Http\Response
     */
    public function show(Typography $typography)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Typography  $typography
     * @return \Illuminate\Http\Response
     */
    public function edit(Typography $typography)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Typography  $typography
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Typography $typography)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Typography  $typography
     * @return \Illuminate\Http\Response
     */
    public function destroy(Typography $typography)
    {
        //
    }
}
