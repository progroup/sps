<?php
return [
  /**
   * New routes
   */
  [
    'pattern' => 'reference/(:all?)',
    'action'  => function ($path = null) {
      go('docs/reference/' . $path);
    }
  ],
  [
    'pattern' => 'made-with-kirby-and-love',
    'action'  => function () {
      go('love');
    }
  ],
  [
    'pattern' => 'hooks/clean',
    'method'  => 'GET|POST',
    'action'  => function () {
      $key = trim(F::read(__DIR__ . '/keys/hooks.txt'));
      if (empty($key) === false && get('key') === $key) {
        kirby()->cache('pages')->flush();
      }
      go();
    }
  ]
];
