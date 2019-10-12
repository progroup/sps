<?php
$key = trim(F::read(__DIR__ . '/keys/algolia.txt'));
if (empty($key)) {
  $key = '84cd67fa388e3c50b3a0a1710fae55ad';
}
return [
  'app'    => 'WTEU7RU64C',
  'key'    => $key,
  'index'  => 'dev_resources_index',
  'fields' => [
    'url',
    'template',
    'title',
    'description' => function ($page) {
      return strip_tags($page->description()->kt());
    },
    'excerpt' => function ($page) {
      return strip_tags($page->excerpt()->kt());
    },
    'text' => function ($page) {
      return strip_tags($page->text()->kt());
    },
    'area' => function ($page) {
      if (Str::startsWith($page->id(), 'docs/reference') === true) {
        return 'reference';
      }
      switch ($page->template()->name()) {
        case 'recipe':
          return 'cookbook';
        case 'guide':
          return 'guide';
        case 'issue':
          return 'kosmos';
      }
    }
  ],
  'templates' => [
    'cheatsheet-article',
    'cheatsheet-section',
    'class' => [
      'filter' => function ($page) {
        return $page->isListed() === true;
      }
    ],
    'component',
    'contact',
    'endpoint',
    'extension',
    'field-method',
    'guide',
    'helper',
    'hook',
    'icon',
    'issue',
    'kirbytag',
    'method' => [
      'filter' => function ($page) {
        return $page->isListed() === true &&
          $page->parent()->isListed() === true;
      }
    ],
    'recipe',
    'release',
    'root',
    'section',
    'text',
    'url',
    'validator',
  ]
];
