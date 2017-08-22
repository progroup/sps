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

            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
