<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function search()
    {
        return view('search');
    }

    /**
     * Show the Documentation.
     *
     * @return \Illuminate\Http\Response
     */
    public function docs()
    {
        return view('docs.home');
    }

    /**
     * Show the About Page.
     *
     * @return \Illuminate\Http\Response
     */
    public function about()
    {
        return view('about.index');
    }

    /**
     * Show the About Page.
     *
     * @return \Illuminate\Http\Response
     */
    public function georgiaSeow()
    {
        return view('about.georgia-seow');
    }

    /**
     * Show the About Page.
     *
     * @return \Illuminate\Http\Response
     */
    public function contact()
    {
        return view('about.contact');
    }

    /**
     * Show the Calendar page.
     *
     * @return \Illuminate\Http\Response
     */
    public function calendar()
    {
        return view('calendar');
    }

    /**
     * Show the Training page.
     *
     * @return \Illuminate\Http\Response
     */
    public function help()
    {
        return view('help');
    }

    /**
     * Show the Training page.
     *
     * @return \Illuminate\Http\Response
     */
    public function training()
    {
        return view('training');
    }

    /**
     * Show the Training page.
     *
     * @return \Illuminate\Http\Response
     */
    public function spf()
    {
        return view('spf');
    }

    /**
     * Show the Training page.
     *
     * @return \Illuminate\Http\Response
     */
    public function learn()
    {
        return view('learn');
    }
}
