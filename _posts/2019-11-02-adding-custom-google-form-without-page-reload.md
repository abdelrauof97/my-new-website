---
layout: post
title: How to add a custom google form to your site without page reload?
---

<p class="message">their are several reasons why you should use google forms like you have now a static website using static site generators like Jekyll, or you may like to use the google forms because of the many benefits it have like amazing managing the incoming responses, or may be using google surveys on your site.</p>
<p>but here we come to a problem when adding a custom google form to the website which how to integrate with the current design? fortunately that could be solved through integrating with google forms and use their external backend, and you could use my guide to do this.</p>

<h2>Steps....</h2>
<h3>1. Create a google form</h3>
<p>Go to <a href="https://forms.google.com">Google Forms</a> and sign in.</p>
<p>You could start creating the form from scratch or start with a template. we will start now with a template for test purpose and choose the contact information template.</p>
<img alt="google template gallery" src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/google-template-gallery.png"/>
<br>
<p>you will find the following fields name, email, address, phone and comments. you could leave name and email address required and make the rest fields optional.</p>
<img alt="contact form example" src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/contact-form-example.png"/>
<br>
<p>Go to the settings by clicking settings icon on the top of the form. and uncheck the "Requires sign in:" checkbox and click save.</p>
<img src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/google-contact-form-settings.png" alt="google contact form settings"/>
<br>
<p>we should now test it by clicking on the view icon at the top after that we click on the link icon and copy the url, then go to incognito mode or use another browser.</p>
<p>you should now see the submission in responses tab</p>
<br>
<img src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/google-form-test-submition.png" alt="google form test submition" />
<br>
<p>the form now is ready for receiving submissions, and we are ready for the next step.</p>
<br>
<h3>2. add a form with same fields on your site</h3>
<p>you should add a form to your website with same fields like you created on the static form, like name, email, address, phone and comments. OfCourse you could add your css classes but the fields, field names and action value should be the same.</p>

{% highlight html %}
<form action="" method="post">

      <label>Name*</label>
      <input type="text" placeholder="Name*" name="" required>

      <label>Email*</label>
      <input type="email" placeholder="Email*" name="" required>

      <label>Address</label>
      <input type="text" placeholder="address" name="">

      <label>Phone</label>
      <input type="text" placeholder="Phone" name="">

      <label>Comments</label>
      <textarea rows="5" placeholder="Comments" name=""></textarea>

      <button type="submit">Send</button>

</form>
{% endhighlight %}
<br>
<h3>3. add google form names and action value to the site form</h3>
<p>this step will tie the google form with the on site form through using the same field names and action value.</p>
<p>first you should get the action value through inspecting the google form while you are not logged in, you could do this be right click on the form and click inspect. then you could add it to the custom form on the site</p>
<img src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/google-form-action-value-inspection.png" alt="google form action value inspection"/>
<br>
<p>get every field name from the google form, you could do through inspecting, and add it to the site custom form.</p>
<img src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/google-form-name-inpection.png" alt="google form name inpection"/>
<br>
<p>after inserting the google form action values and name, the on site form should look similar to this:</p>
{% highlight html %}
<form action="https://docs.google.com/forms/d/e/1FAIpQLSfenWAvPBVykQwQsOwp8GIXAIo3A_Gd0P8TfA_lYcARbpkXXw/formResponse" method="post">

      <label>Name*</label>
      <input type="text" placeholder="Name*" name="entry.2005620554" required>

      <label>Email*</label>
      <input type="email" placeholder="Email*" name="entry.1045781291" required>

      <label>Address</label>
      <input type="text" placeholder="address" name="entry.1065046570">

      <label>Phone</label>
      <input type="text" placeholder="Phone" name="entry.1166974658">

      <label>Comments</label>
      <textarea rows="5" placeholder="Comments" name="entry.839337160"></textarea>

      <button type="submit">Send</button>

</form>
{% endhighlight %}
<br>
<p>your form now should be linked to the google form backend, you could test it now by filling test data, and look for the response on your google form responses.</p>
<img src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/form-submition-2.png" alt="form submission test two"/>
<br>
<h3>4. stay on the same page without reload</h3>
<p>the form now is being redirected to the google form after submission, but we now could make it stay on the same page and display thank you dialogue without reloading the page!</p>

{% highlight html %}
<!-- adding the hidden iframe before the form -->
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>

<form id="claim_form" action="https://docs.google.com/forms/d/e/1FAIpQLSfenWAvPBVykQwQsOwp8GIXAIo3A_Gd0P8TfA_lYcARbpkXXw/formResponse" method="POST" target="hidden_iframe" onsubmit="submitted=true;">

      <label>Name*</label>
      <input type="text" placeholder="Name*" name="entry.2005620554" required>

      <label>Email*</label>
      <input type="email" placeholder="Email*" name="entry.1045781291" required>

      <label>Address</label>
      <input type="text" placeholder="address" name="entry.1065046570">

      <label>Phone</label>
      <input type="text" placeholder="Phone" name="entry.1166974658">

      <label>Comments</label>
      <textarea rows="5" placeholder="Comments" name="entry.839337160"></textarea>

      <button type="submit">Send</button>

</form>

<!-- here we add the following script which executed after submitting the form and adding the thanks dialogue -->
<script>
var submitted=false;

// the thanksBox is being displayed after submitting the form.
var thanksBox ='<div class="after-submit">\
    <style>#claim_form{display: none;}</style>\
    <h5>Thank you for your interest!</h5>\
    <h6>Your message was sent to local representatives. Check your email for details.</h6>\
  </div>';
var thanksBoxWrapper = document.createElement('div');
thanksBoxWrapper.innerHTML = thanksBox;

document.querySelector("#claim_form").addEventListener("submit", function(e){
  if(submitted){
    claimForm = document.querySelector('#claim_form');
    claimForm.parentNode.insertBefore(thanksBoxWrapper, claimForm.nextSibling);
  }
});
</script>
{% endhighlight %}
<br>
<p>You should add the Ifram before the form open tag, and add form attributes like ID, method, target and onSubmit. you should also add the script at the end of the code so the form displaying the thanks dialogue after the form being submit.</p>
<img src="{{ site.url }}/public/img/adding-custom-google-form-without-page-refresh/google-form-submission-4.png" alt="google form submission four"/>
<br>
<p>You now have a working custom form that being submitted without reload the page.</p>
