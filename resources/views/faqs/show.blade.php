@extends('layouts.app')

@section('content')
<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-2">
                @include('layouts.sidebar')
            </div>
            <div class="column">
                <div class="content">
                    <h1>{{$faq->question}}</h1>

                    @if (count($faq->tags))
                        @foreach ($faq->tags as $tag)
                            <a href="/faqs/tags/{{ $tag->name }}">
                                <span class="tag is-primary">
                                    {{ $tag->name }}
                                </span>
                            </a>
                        @endforeach
                    @endif

                    <p>
                        {{$faq->answer}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
