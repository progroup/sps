<?php
use App\Faq;

Route::get('/', function () {
    $faqs = DB::table('faqs')->get();

    return view('welcome', compact('faqs'));
});

Route::get('/faqs', function () {
    $faqs = Faq::all();

    return view('faqs.index', compact('faqs'));
});


Route::get('/faqs/{faq}', function ($id) {
    $faq = Faq::find($id);

    return view('faqs.show', compact('faq'));
});
