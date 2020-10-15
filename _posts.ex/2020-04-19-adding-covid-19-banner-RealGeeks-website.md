---
layout: post
title: adding COVID-19 banner on RealGeeks website
heroImage: /public/assets/photos/posts/adding-covid-19-banner-RealGeeks-website/covid-19-banner-min.png
---

<h2>Adding the banner for the virtual services</h2>
<p>Copy the following code and paste it at the end of the footer!</p>
{% highlight html %}
<style>.miranda-wrapper{margin-top:50px;}nav.top-nav{top:50px !important;}.alert-banner{position:fixed; height:50px; background:#000000; width:100%; top:0; text-align:center; z-index:100;}.alert-banner a.info { background-color: #c61130; color:#fff; font-size: 24px; padding: 8px 30px; border-radius:4px; border:none; box-shadow: 0 2px 7px -4px #000; margin:0 20px; width:220px; height:43px;} .alert-banner a.info:focus { background-color: #c61130; border:none; } .alert-banner a.info:hover { background-color: #CC1433; color: #fff; transform: scale(1.1); transition: all ease 500ms;} .alert-banner p {font-size:18px; color:#fff; margin-top:10px;}.alert-banner a {color:#fff; text-decoration:underline; font-weight:bold; font-size:18px; padding:0 10px;}.alert-banner a:hover {color:#e6e6e6;}@media only screen and (max-width: 46em) and (min-width: 450px) {nav.top-nav{top:60px !important;}}@media only screen and (max-width: 46em){.miranda-wrapper{margin-top:0;}.alert-banner{height:60px;position:relative;padding-top: 5px;}.alert-banner p {font-size:18px; line-height:1.2; margin-top:5px;}}@media only screen and (max-width: 450px){nav.top-nav{top:0 !important;}}</style>
<script>// <![CDATA[
document.addEventListener("DOMContentLoaded", function(event) {

$bannertext = ' <div class="alert-banner"><p><i style="padding-right:10px;" class="fa fa-exclamation-triangle"></i> Due to the COVID-19 Outbreak we are now offering Virtual Services! <a href="/virtual-services/">Learn&nbsp;More</a></p></div> ';

$('.miranda-wrapper').before($bannertext);
});
// ]]></script>
{% endhighlight %}
<p>That is how the COVID-19 banner should look like after adding the code</p>
<img src="{{ site.url }}/public/assets/photos/posts/adding-covid-19-banner-RealGeeks-website/covid-19-banner-min-2.png" alt="COVID-19 banner"/>

<h2>Add the virtual services page</h2>
<p>Create a new blank page with the slug of 'virtual-services' and paste the following code to it (feel free to change the wording to what you like):</p>

{% highlight html %}
<div style="margin-top: 100px; margin-bottom: 100px;">
<h1 style="text-align: center;"><span class="fa fa-exclamation-triangle" style="padding-right: 10px;"></span> Due to the COVID-19 Outbreak we are now offering Virtual&nbsp;Services!</h1>
<hr>
<p>We are taking great caution to protect our loved ones during the Coronavirus, as well as yours. While our team is continuing to work remotely we've taken other precautions. We are now available for virtual meetings, showings as well as virtual open houses!! Of course we can still do live showings with precaution. <strong><a class="popup" href="/member/contact/" data-property="VIRTUAL SERVICES">Click here</a></strong> to schedule a Virtual Tour of any of our listings!</p>
</div>
{% endhighlight %}
<p>That is how the virtual services page  should look like after adding the code</p>
<img src="{{ site.url }}/public/assets/photos/posts/adding-covid-19-banner-RealGeeks-website/virtual-services-page-min.png" alt="virtual services page"/>
<p>Do you have any questions? <a href="/contact-rauof/">Contact Us Now!</a></p>
