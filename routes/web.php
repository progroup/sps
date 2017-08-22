<?php

Route::get('/', 'FaqController@index');
Route::get('/faqs/create', 'FaqController@create');
Route::post('/faqs', 'FaqController@store');
Route::get('/faqs/{faq}', 'FaqController@show');
