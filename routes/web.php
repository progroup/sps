<?php

Auth::routes();

Route::name('profile')->get('/profiles/{user}', 'ProfilesController@show');
Route::name('docs')->get('/docs', 'PagesController@docs');
Route::name('spf')->get('/spf', 'PagesController@spf');
Route::name('calendar')->get('/calendar', 'PagesController@calendar');
Route::name('learn')->get('/learn', 'PagesController@learn');
Route::name('training')->get('/training', 'PagesController@training');
Route::name('contact')->get('/contact', 'PagesController@contact');
Route::name('georgia-seow')->get('/georgia-seow', 'PagesController@georgiaSeow');
Route::name('about')->get('/about', 'PagesController@about');
Route::name('help')->get('/help', 'PagesController@help');
Route::name('search')->get('/search', 'PagesController@search');


Route::name('home')->get('/', 'PagesController@index');
