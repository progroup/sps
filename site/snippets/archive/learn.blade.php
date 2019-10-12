@extends('layouts.app')
@section('content')
<section class="hero is-light is-bold" style="background-image: url('/assets/images/banners/learn.jpg')">
    <div class="hero-body">
        <div class="container">

        </div>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-2">
                @include('partials.sidebar')
            </div>
            <div class="column is-8">
                <div class="content">
                    <h1>Upload Reports with ECCO</h1>

                    <p>From this page you can request TTA services or upload your Implementation Plans. </p>
<p><strong>TTA Requests:</strong><br>
Monitor the status of your TTA requests by logging in and selecting "Training and Technical Assistance."</p>
<p><strong>Upload IPs Here!</strong></p>
<ol>
<li>Select "Upload Report"</li>
<li>Select your gency </li>
<li>Fill form</li>
<li>Click submit<br>
Done!</li>
</ol>
<p>Please keep in mind that your IPs <em>must be the standard Excel format.</em>  No other report types will be accepted by the system. The file name should end with the extension .xls or .xlsx. </p>
<p>Concerns? Contact information listed below.</p>
<p><strong>Marcus:</strong> <a href="mailto:mbouligny@progroup.us">mbouligny@progroup.us</a> 415-516-1332<br>
<strong>Krystal:</strong> <a href="mailto:krystal@progroup.us">krystal@progroup.us</a>  678-557-87711</p>                </div>
            </div>
        </div>
    </div>
</section>
@endsection
