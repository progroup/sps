<?php

Route::get('/', function() {
    return view('spa');
});

Route::get('/topics', 'TopicsController@index');
Route::get('/topics/create', 'TopicsController@create');
Route::post('/topics', 'TopicsController@store');
Route::get('/topics/{topic}', 'TopicsController@show');

Route::get('/faqs', 'FaqsController@index');
Route::get('/faqs/create', 'FaqsController@create');
Route::post('/faqs', 'FaqsController@store');
Route::get('/faqs/{faq}', 'FaqsController@show');

Route::get('/faqs/tags/{tag}', 'TagsController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
