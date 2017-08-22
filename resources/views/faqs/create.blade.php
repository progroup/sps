@extends('layouts.app')
@section('content')
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-2">
          @include('layouts.sidebar')
      </div>
      <div class="column is-7">
          <h1 class="title">Answer a Frequently Asked Question</h1>

          <form method="POST" action="/faqs">
            {{csrf_field()}}
            <div class="field">
                <label class="label">Question</label>
                <div class="control">
                  <input class="input" type="text" name="question" placeholder="Text input" required>
                </div>
              </div>

              <div class="field">
                <label class="label">Answer</label>
                <div class="control">
                  <textarea class="textarea" name="answer" placeholder="Textarea" required></textarea>
                </div>
              </div>

              <div class="field">
                  <label class="label">Topic</label>
                  <div class="control">
                    <div class="select">
                      <select name="topic">
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-link">Cancel</button>
                </div>
              </div>
          </form>
      </div>
    </div>
  </div>
</section>
@endsection
