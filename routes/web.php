<?php
Route::get('/', function () {
    $faqs = DB::table('faqs')->get();

    return view('welcome', compact('faqs'));
});

Route::get('/faqs', function () {
    $faqs = DB::table('faqs')->get();

    return view('faqs.index', compact('faqs'));
});


Route::get('/faqs/{faq}', function ($id) {
    $faq = DB::table('faqs')->find($id);

    return view('faqs.show', compact('faq'));
});
