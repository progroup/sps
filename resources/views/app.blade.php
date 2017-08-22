<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        <title>{{ config('app.name') }} </title>
    </head>
    <body>
        <div id="app">
            <main class="main">
                <!-- @include('layouts.header') -->
                @include ('layouts.nav')
                @include ('layouts.hero')
                <!-- <section class="section">
                    <div class="container">
                        <div class="columns">
                            <div class="column has-text-centered">
                                <a class="button is-primary is-outlined is-large">
                                    <span>Resources</span>
                                </a>
                            </div>
                            <div class="column has-text-centered">
                                <a class="button is-primary is-outlined is-large">
                                    <span>Training Center</span>
                                </a>
                            </div>
                            <div class="column has-text-centered">
                                <a class="button is-primary is-outlined is-large">
                                    <span>Help / IP Reports</span>
                                </a>
                            </div>
                            <div class="column has-text-centered">
                                <a class="button is-primary is-outlined is-large">
                                    <span>Calendar</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section> -->
                <section class="section">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-2">
                                <aside class="menu">
                                    <p class="menu-label">
                                        Top Help Topics
                                    </p>

                                    <ul class="menu-list">
                                        <li>
                                            <a href="#">Alcohol and Substance Abuse Prevention (ASAP)</a>
                                        </li>
                                        <li>
                                            <a href="#">Prescription Drug Abuse Prevention (GENRx)</a>
                                        </li>
                                        <li>
                                            <a href="#">Suicide Prevention</a>
                                        </li>
                                        <li>
                                            <a href="#">DBHDD/OBHP</a>
                                        </li>
                                        <li>
                                            <a href="#">Red Ribbon Week</a>
                                        </li>
                                        <li>
                                            <a href="#">Contracts</a>
                                        </li>
                                        <li>
                                            <a href="#">Continuing Education</a>
                                        </li>
                                    </ul>

                                </aside>
                            </div>
                            <div class="column">
                                <div class="content">
                                    <h1>Frequently Asked Questions</h1>

                                    @foreach ($faqs as $faq)
                                    <b-panel collapsible>
                                        <strong slot="header">{{$faq->question}}</strong>
                                        <div class="content">
                                            <p>{{$faq->answer}}</p>
                                        </div>
                                    </b-panel>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <transition name="fade" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </main>
            <footer class="foot" style="background: #000">
                <section class="section">
                    <div class="container">
                        <p>Footer</p>
                    </div>
                </section>
            </footer>
            <flash message="{{ session('flash') }}"></flash>
        </div>
        <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
