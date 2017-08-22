<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/faqs', 'FaqController@index');
Route::get('/faqs/{faq}', 'FaqController@show');
