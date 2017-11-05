<?php
use App\Resource;
use App\Notifications\ResourceAdded;
// use Corcel\Model\Post;
use Spatie\Browsershot\Browsershot;

Route::resource('resources', 'ResourcesController');

Route::get('1', function () {
    Resource::create([
        'title' => 'Resource 1',
        'description' => 'Resource 2 Description'
    ])
        ->addMedia(storage_path('demo/waves.jpg'))
        ->preservingOriginal()
        ->toMediaCollection();
});

Route::get('2', function () {
    $resource = Resource::create([
        'title' => 'Resource 2',
        'description' => 'Resource 2 Description'
    ]);

    $resource
        ->addMedia(storage_path('demo/waves.jpg'))
        ->preservingOriginal()
        ->toMediaCollection('images');

    $resource
        ->addMedia(storage_path('demo/test.pdf'))
        ->preservingOriginal()
        ->toMediaCollection('downloads');
});

Route::get('3', function () {
    $resource = Resource::create([
        'title' => 'Resource 3',
        'description' => 'Resource 3 Description'
    ]);

    $resource
        // ->addMediaFromRequest('upload')
->addMedia(storage_path('demo/waves.jpg'))
        ->preservingOriginal()
        ->toMediaCollection('images', 's3');


});

Route::get('/topics', 'TopicsController@index');
Route::get('/topics/create', 'TopicsController@create');
Route::post('/topics', 'TopicsController@store');
Route::get('/topics/{topic}', 'TopicsController@show');

Route::get('/faqs', 'FaqsController@index')->name('faqs');
Route::get('/faqs/create', 'FaqsController@create');
Route::post('/faqs', 'FaqsController@store');
Route::get('/faqs/{faq}', 'FaqsController@show');

// Route::get('/faqs/tags/{tag}', 'TagsController@index');

Route::get('/search', 'SearchController@index')->name('search');

Route::get('/examples/coverr', function () {
    // $posts = Post::published()->get();
    // $post = Post::find(1);
    // return $post->post_title;
    // return $posts;

    return view('examples.coverr.index');

    $resource = Resource::find(1);
    $resource->notify(new ResourceAdded());
});

Route::get('/mailit', function () {
    // $posts = Post::published()->get();
    // $post = Post::find(1);
    // return $post->post_title;
    // return $posts;
    Browsershot::url('http://github.com')->save('github.png');

    // $resource = Resource::find(1);
    // $resource->notify(new ResourceAdded());






















});

Route::get('decompose', '\Lubusin\Decomposer\Controllers\DecomposerController@index');

Route::get('/test', 'TestController@index');

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
    $speaker = $id == 0 ? new \App\Speaker() : \App\Speaker::find($id);
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

Route::get('/grid', function () {
    return view('examples.grid');
});

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

Route::name('projects.create')->get('/projects', 'ProjectsController@create');
Route::name('projects.store')->post('/projects', 'ProjectsController@store');

Route::name('home')->get('/', 'PagesController@index');
Route::name('page')->get('{url}', 'PageController')->where('url', '.*');

// Route::view('/about', 'pages.about');
// Route::view('/about', 'pages.about', ['year' => date('Y')]);
// Route::redirect('/old-about', '/about');

