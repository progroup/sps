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
            <a class="button is-link" href="/faqs/create">Add a Question</a>

            <div class="content is-medium">
              <ul>
              @forelse ($faqs as $faq)
                <li>
                  <div>
                    <p>
                      <b>{{$faq->question}}</b>
                      <p>{{$faq->answer}}</p>
                    </p>
                  </div>
                </li>
              @empty
                <li>No FAQs</li>
              @endforelse
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
