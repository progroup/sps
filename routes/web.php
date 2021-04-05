<?php

use Illuminate\Support\Facades\Route;

// Route::mediaLibrary();

Route::get('/{any?}', function () {
    return view('index');
})->where('any', '^(?!api).*$');
