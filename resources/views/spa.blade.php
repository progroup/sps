<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

  <!-- Scripts -->
  <script>
    window.App = {!! json_encode([
      'csrfToken' => csrf_token(),
      'user' => Auth::user(),
      'signedIn' => Auth::check()
    ])!!};
  </script>
  <style>
    .ais-highlight em {
      background-color: #ff9;
      font-style: normal;
    }
  </style>
</head>

<body>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
          </div>
          <div class="column">
            <div class="content">
              <ais-index
                app-id="WTEU7RU64C"
                api-key="84cd67fa388e3c50b3a0a1710fae55ad"
                index-name="faqs"
              >
                <div class="field">
                  <label for="" class="label"></label>


                  <div class="control">
                    <ais-input placeholder="Search FAQs..." autofocus :class-names="{
                      'ais-input': 'input'
                    }"></ais-input>
                  </div>
                </div>

                <ais-no-results>
                  <template scope="props">
                    No products found for <i>@{{ props.query }}</i>.
                  </template>
                </ais-no-results>

                <ais-results>
                  <template scope="{ result }">
                    <h2>
                      <ais-highlight :result="result" attribute-name="question"></ais-highlight>
                    </h2>
                    <p>@{{ result.answer }}</p>
                  </template>
                </ais-results>
              </ais-index>

              <ais-index
                  app-id="WTEU7RU64C"
                  api-key="84cd67fa388e3c50b3a0a1710fae55ad"
                  index-name="faqs"
                >
                  <ais-search-box :class-names="{
                    'ais-search-box': 'input',
                    'ais-search-box__submit': 'button is-primary',
                  }"></ais-search-box>

                  <ais-results>
                    <template scope="{ result }">
                      <h2>
                        <ais-highlight :result="result" attribute-name="question"></ais-highlight>
                      </h2>
                    </template>
                  </ais-results>
                  <ais-pagination></ais-pagination>
                </ais-index>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
  <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
