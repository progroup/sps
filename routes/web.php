<?php

Route::get('/', 'TopicsController@index');
Route::get('/topics/create', 'TopicsController@create');
Route::post('/topics', 'TopicsController@store');
Route::get('/topics/{topic}', 'TopicsController@show');

Route::get('/faqs', 'FaqsController@index');
Route::get('/faqs/create', 'FaqsController@create');
Route::post('/faqs', 'FaqsController@store');
Route::get('/faqs/{faq}', 'FaqsController@show');
