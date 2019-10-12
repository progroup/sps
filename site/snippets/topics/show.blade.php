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
          <h1>{{$topic->name}}</h1>

          <hr>
          @foreach($topic->faqs as $faq)
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h2>{{ $faq->question }}</h2>
                  <p>{{ $faq->answer }}</p>
                  <small>{{ $faq->created_at->diffForHumans() }}</small>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>
@endsection
