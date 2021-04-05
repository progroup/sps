<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug');
            $table->string('channel');
            $table->string('category');
            $table->string('url');
            $table->string('file_url');
            $table->string('resource_url');
            $table->string('title');
            $table->text('description');
            $table->string('filetype');
            $table->text('tags');
            $table->string('author');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        Schema::create('resource_tag', function (Blueprint $table) {
            $table->integer('resource_id');
            $table->integer('tag_id');
            $table->primary(['resource_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resources');
        Schema::dropIfExists('resource_tag');
    }
}
