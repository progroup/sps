<?php snippet('html.top') ?>
<?php snippet('banner') ?>
<div class="container">
  <main class="row">
    <article class="col-md-9 col-md-push-3">
      <header class="page-header">
        <h1><?= $page->title()->html() ?></h1>
      </header>

      <?= $page->text()->kirbytext() ?>

      <?php snippet('training-table') ?>
    </article>
    <aside class="col-md-3 col-md-pull-9">
      <?php snippet('sidebar') ?>
    </aside>
  </main>
</div>
<?php snippet('html.bottom') ?>