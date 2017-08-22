<?php

Route::get('/', function () {
    $faqs = DB::table('faqs')->get();
    // return $faqs;

    return view('app', compact('faqs'));
});
