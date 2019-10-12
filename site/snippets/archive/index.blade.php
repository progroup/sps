@extends('layouts.app')
@section('content')
<transition name="fade" mode="out-in">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</transition>
@endsection


