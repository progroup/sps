@extends('layouts.app')
@section('content')
<div id="app">
    <transition name="fade" mode="out-in">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
</div>
@endsection
