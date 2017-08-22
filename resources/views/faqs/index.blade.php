@extends('layouts.app')
@section('content')
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
            <h1 class="title">Frequently Asked Questions</h1>
            <div class="content is-medium">
              <ol>
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
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
