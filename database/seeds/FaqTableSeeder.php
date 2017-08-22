<?php

use Illuminate\Database\Seeder;

class FaqTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('faqs')->insert([
            'question' => 'What types of questions should be entered into ECCO for technical assistance versus what types of questions should be directed towards the Regional Prevention Specialist (RPS)',
            'answer' => 'The questions entered in ECCO should be questions concerning the strategies, process, implementation of the project. Any programmatic, invoice related or budget questions should be directed to your RPS.',
            'topic_id' => 1,
        ]);
    }
}
