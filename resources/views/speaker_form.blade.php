@extends('layouts.app')
@section('content')
<section class="section">
    <div class="container">
        <form action="{{ '/speaker/'.($speaker ? $speaker->id: 0) }}" method="POST">
            {{ csrf_field() }}

            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" name="name" value="{{$speaker ? $speaker->name: ''}}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false">
                </div>
            </div>

            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <textarea class="textarea" name="title">{{$speaker ? $speaker->title: ''}}</textarea>
                </div>
            </div>

            <div class="flex-container form-group">
                @foreach(\App\Conference::all() as $event)
                    <div>
                        {{$event->name}} <input {{ $speaker && $speaker->attend($event) ? 'checked=checked': '' }} type="checkbox" name="events[]" value="{{$event->id}}"/>
                    </div>
                @endforeach
            </div>

            <div class="field">
                <div class="control">
                    <button class="button" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
</section>
@endsection
