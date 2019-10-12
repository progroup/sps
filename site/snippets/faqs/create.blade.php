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
                  <input class="input" type="text" name="question" placeholder="Text input">
                </div>
              </div>

              <div class="field">
                <label class="label">Answer</label>
                <div class="control">
                  <textarea class="textarea" name="answer" placeholder="Textarea"></textarea>
                </div>
              </div>

              <div class="field">
                  <label class="label">Topic</label>
                  <div class="control">
                    <div class="select">
                      <select name="topic_id">
                        <option value='0'>Select Topic</option>
                        <option value='1'>Using ECCO</option>
                        <option value='2'>Alcohol and Substance Abuse Prevention Project (ASAPP)</option>
                        <option value='3'>Suicide Prevention</option>
                        <option value='4'>Red Ribbon Week</option>
                        <option value='5'>Contracts</option>
                        <option value='6'>Prescription Drug Abuse Prevention (GENRx)</option>
                        <option value='7'>DBHDD/OBHP</option>
                        <option value='8'>Continuing Education</option>
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
      <div class="column is-3">
          @include('layouts.errors')
      </div>
    </div>
  </div>
</section>
@endsection
