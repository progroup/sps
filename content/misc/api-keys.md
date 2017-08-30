# Obtaining API Keys

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" width="200">

- Visit [Google Cloud Console](https://cloud.google.com/console/project)
- Click on the **Create Project** button
- Enter *Project Name*, then click on **Create** button
- Then click on *APIs & auth* in the sidebar and select *API* tab
- Click on **Google+ API** under *Social APIs*, then click **Enable API**
- Next, under *APIs & auth* in the sidebar click on *Credentials* tab
- Click on **Create new Client ID** button
- Select *Web Application* and click on **Configure Consent Screen**
- Fill out the required fields then click on **Save**
- In the *Create Client ID* modal dialog:
 - **Application Type**: Web Application
 - **Authorized Javascript origins**: http://localhost:3000
 - **Authorized redirect URI**: http://localhost:3000/auth/google/callback
- Click on **Create Client ID** button
- Copy and paste *Client ID* and *Client secret* keys into `.env`

**Note:** When you ready to deploy to production don't forget to
add your new url to *Authorized Javascript origins* and *Authorized redirect URI*,
e.g. `http://my-awesome-app.herokuapp.com` and
`http://my-awesome-app.herokuapp.com/auth/google/callback` respectively.
The same goes for other providers.

<hr>

<img src="http://www.doit.ba/img/facebook.jpg" width="200">

- Visit [Facebook Developers](https://developers.facebook.com/)
- Click **My Apps**, then select **Add a New App* from the dropdown menu
- Select **Website** platform and enter a new name for your app
- Click on the **Create New Facebook App ID** button
- Choose a **Category** that best describes your app
- Click on **Create App ID** button
- In the upper right corner click on **Skip Quick Star**
- Copy and paste *App ID* and *App Secret* keys into `.env`
 - **Note:** *App ID* is **clientID**, *App Secret* is **clientSecret**
- Click on the *Settings* tab in the left nav, then click on **+ Add Platform**
- Select **Website**
- Enter `http://localhost:3000` under *Site URL*

**Note:** After a successful sign in with Facebook, a user will be redirected back to home page with appended hash `#_=_` in the URL. It is *not* a bug. See this [Stack Overflow](https://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url) discussion for ways to handle it.

<hr>

<img src="https://github.global.ssl.fastly.net/images/modules/logos_page/GitHub-Logo.png" width="200">

- Go to [Account Settings](https://github.com/settings/profile)
- Select **Applications** from the sidebar
- Then inside **Developer applications** click on **Register new application**
- Enter *Application Name* and *Homepage URL*
- For *Authorization Callback URL*: http://localhost:3000/auth/github/callback
- Click **Register application**
- Now copy and paste *Client ID* and *Client Secret* keys into `.env` file

<hr>

<img src="https://g.twimg.com/ios_homescreen_icon.png" width="90">

- Sign in at [https://apps.twitter.com/](https://apps.twitter.com/)
- Click **Create a new application**
- Enter your application name, website and description
- For **Callback URL**: http://127.0.0.1:3000/auth/twitter/callback
- Go to **Settings** tab
- Under *Application Type* select **Read and Write** access
- Check the box **Allow this application to be used to Sign in with Twitter**
- Click **Update this Twitter's applications settings**
- Copy and paste *Consumer Key* and *Consumer Secret* keys into `.env` file

<hr>

<img src="http://www.danpontefract.com/wp-content/uploads/2014/02/logo-linkedin.png" width="200">

- Sign in at [LinkedIn Developer Network](https://developer.linkedin.com/)
- From the account name dropdown menu select **API Keys**
 - *It may ask you to sign in once again*
- Click **+ Add New Application** button
- Fill out all the *required* fields
 - **OAuth 2.0 Redirect URLs**: http://localhost:3000/auth/linkedin/callback
 - **JavaScript API Domains**: http://localhost:3000
- For **Default Application Permissions** make sure at least the following is checked:
 - `r_basicprofile`
- Finish by clicking **Add Application** button
- Copy and paste *API Key* and *Secret Key* keys into `.env` file
 - *API Key* is your **clientID**
 - *Secret Key* is your **clientSecret**

<hr>


<img src="https://stripe.com/img/about/logos/logos/black@2x.png" width="200">

- [Sign up](https://stripe.com/) or log into your [dashboard](https://manage.stripe.com)
- Click on your profile and click on Account Settings
- Then click on [API Keys](https://manage.stripe.com/account/apikeys)
- Copy the **Secret Key**. and add this into `.env` file

<hr>

<img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png" width="200">

- Visit [PayPal Developer](https://developer.paypal.com/)
- Log in to your PayPal account
- Click **Applications > Create App** in the navigation bar
- Enter *Application Name*, then click **Create app**
- Copy and paste *Client ID* and *Secret* keys into `.env` file
- *App ID* is **client_id**, *App Secret* is **client_secret**
- Change **host** to api.paypal.com if you want to test against production and use the live credentials

<hr>

<img src="http://33.media.tumblr.com/ffaf0075be879b3ab0b87f0b8bcc6814/tumblr_inline_n965bkOymr1qzxhga.png" width="200">

- Go to [foursquare for Developers](https://developer.foursquare.com/)
- Click on **My Apps** in the top menu
- Click the **Create A New App** button
- Enter *App Name*, *Welcome page url*,
- For **Redirect URI**: http://localhost:3000/auth/foursquare/callback
- Click **Save Changes**
- Copy and paste *Client ID* and *Client Secret* keys into `.env` file

<hr>

<img src="http://img4.wikia.nocookie.net/__cb20130520163346/logopedia/images/8/8d/Tumblr_logo_by_x_1337_x-d5ikwpp.png" width="200">

- Go to http://www.tumblr.com/oauth/apps
- Once signed in, click **+Register application**
- Fill in all the details
- For **Default Callback URL**: http://localhost:3000/auth/tumblr/callback
- Click **✔Register**
- Copy and paste *OAuth consumer key* and *OAuth consumer secret* keys into `.env` file

<hr>

<img src="http://www.technologytell.com/gaming/files/2012/01/steam_logo.jpg" width="200">

- Go to http://steamcommunity.com/dev/apikey
- Sign in with your existing Steam account
- Enter your *Domain Name*, then and click **Register**
- Copy and paste *Key* into `.env` file

<hr>

<img src="http://iandouglas.com/presentations/pyconca2012/logos/sendgrid_logo.png" width="200">

- Go to https://sendgrid.com/user/signup
- Sign up and **confirm** your account via the *activation email*
- Then enter your SendGrid *Username* and *Password* into `.env` file

<hr>

<img src="https://raw.github.com/mailgun/media/master/Mailgun_Primary.png" width="200">

- Go to http://www.mailgun.com
- Sign up and add your *Domain Name*
- From the domain overview, copy and paste the default SMTP *Login* and *Password* into `.env` file

<hr>

<img src="http://cdn.appstorm.net/web.appstorm.net/web/files/2013/12/mandrill-logo.png" width="100">

- Go to http://mandrill.com
- Sign up and add your *Domain Name*
- From the dashboard, click on *Get SMTP credentials*
- Copy and paste the default SMTP *Login* and *Password* into `.env` file

<hr>

<img src="https://www.bitgo.com/img/new_bitgo/logo_footer.png" width="200">

- Go to https://test.bitgo.com/
- Sign up for an account.
- Once logged into the dashboard, go to the top right selector and click 'account settings'
- Under the developers tab, create your access token and copy and paste it into `.env` file

<hr>

<img src="https://s3.amazonaws.com/ahoy-assets.twilio.com/global/images/wordmark.svg" width="200">
- Go to https://www.twilio.com/try-twilio
- Sign up for an account.
- Once logged into the dashboard, expand the link 'show api credentials'
- Copy your Account Sid and Auth Token

run ```php artisan vendor:publish```

<hr>

## Nexmo

```
curl -X POST  https://rest.nexmo.com/sms/json \
-d api_key=xxx \
-d api_secret=xxx \
-d to=1234567890 \
-d from=12015834681 \
-d text="Hello from Nexmo"
```
