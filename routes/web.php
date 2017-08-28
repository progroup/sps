<?php

Route::get('/topics', 'TopicsController@index');
Route::get('/topics/create', 'TopicsController@create');
Route::post('/topics', 'TopicsController@store');
Route::get('/topics/{topic}', 'TopicsController@show');

Route::get('/faqs', 'FaqsController@index');
Route::get('/faqs/create', 'FaqsController@create');
Route::post('/faqs', 'FaqsController@store');
Route::get('/faqs/{faq}', 'FaqsController@show');

Route::get('/faqs/tags/{tag}', 'TagsController@index');

Route::group(['prefix' => 'proposal-viewer'], function() {
    Route::get('/', ['as' => 'proposal-viewer.home', 'uses' => 'ProposalViewerController@index']);
    Route::any('show', ['as' => 'proposal-viewer.show', 'uses' => 'ProposalViewerController@show']);
});

// https://github.com/maxiloc/laracon17
Route::get('/speakers', function () {
    return view('speakers');
});

Route::get('/speakers/add', function () {
   return view('speaker_form')->with('speaker', null);
});

Route::get('/speakers/{speaker}/edit', function (\App\Speaker $speaker) {
    return view('speaker_form')->with('speaker', $speaker);
});

Route::post('/speakers/{id}', function (\Illuminate\Http\Request $request, $id) {
    $speaker = $id == 0 ? new \App\Speaker(): \App\Speaker::find($id);
    $speaker->name = $request->input('name');
    $speaker->title = $request->input('title');
    $speaker->save();
    $speaker->conferences()->detach();
    if ($request->input('events')) {
        foreach ($request->input('events') as $event_id) {
            $speaker->conferences()->attach($event_id);
        }
    }
    return redirect('/speakers');
});

Route::get('/speakers/{id}/delete', function ($id) {
   $speaker = \App\Speaker::find($id);
   if ($speaker) {
       $speaker->delete();
   }
   return redirect('/speakers');
});

Auth::routes();

Route::get('/spa', function() {
    return view('spa');
});

Route::get('/', 'HomeController@index')->name('home');

Route::get('/{url}', 'PageController')->where('url', '.*')->name('page');
