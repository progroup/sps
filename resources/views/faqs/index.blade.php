@extends('layouts.app')
@section('content')
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          @include('layouts.sidebar')
        </div>
        <div class="column">
            <h1 class="title">Frequently Asked Questions</h1>
            <p>Below is the list of frequently asked questions, if you think a common question is missing in the list. Please create an issue here</p>
            <a class="button is-link" href="/faqs/create">Add a Question</a>

            <div class="content is-medium">
              <ol>
              @forelse ($faqs as $faq)
                <li>
                  <div>
                    <p>
                      <!-- <b>{{$faq->created_at->toFormattedDateString()}}</b> -->
                      <a href="/faqs/{{ $faq->id }}">
                        {{$faq->question}}
                      </a>
                      <p>{{$faq->answer}}</p>
                    </p>
                  </div>
                </li>
              @empty
                <li>No FAQs</li>
              @endforelse
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
