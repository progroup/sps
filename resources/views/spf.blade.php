@extends('layouts.app')
@section('content')
<section class="hero is-primary is-bold">
    <div class="hero-body">
        <div class="container">

        </div>
    </div>
</section>
<section class="section">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-2">
                @include('partials.sidebar')
            </div>
            <div class="column is-8">
                <div class="content">
                    <h1>SPF Overview</h1>

                    <p>The five steps that comprise SAMHSA’s Strategic Prevention Framework will enable States and communities to build the infrastructure necessary for effective and sustainable prevention. Each step contains key milestones and products that are essential to the validity of the process.</p>
<p><strong>Note</strong> In order to ensure complete adherence to the SAMHSA SPF model, these notes have been derived from the SAMHSA website and other SAMHSA materials.  For more information, go to www.SAMHSA.org</p>
                    <h2>Play Narration</h2>

                    <audio controls="">
                        <source src="http://ga-sps.org/content/spf/spf-overview-introduction.m4a" type="">
                    </audio>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
