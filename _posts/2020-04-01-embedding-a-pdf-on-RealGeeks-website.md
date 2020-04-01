---
layout: post
title: Embedding a PDF on RealGeeks website
heroImage: /public/assets/photos/posts/embedding-a-pdf-on-RealGeeks-website/embedding-pdf-file-code-on-desired-page.png
---

<h2>How to embed a PDF on RealGeeks website</h2>

<p>First you need to go to upload the PDF you want to embed by going into the admin panel choose file browser and upload the new PDF.</p>
<img src="{{ site.url }}/public/assets/photos/posts/embedding-a-pdf-on-RealGeeks-website/uploading-pdf-file-on-filebrowser.png" alt="uploading pdf file on filebrowser"/>

<h2>That is how the embed code would look like</h2>
{% highlight html %}
<!-- change YOUR_PDF_URL to the URL of your PDF file  -->
<iframe width="725" height="900" src="YOUR_PDF_URL" frameborder="0"></iframe>
{% endhighlight %}

<h2>Getting your uploaded PDF url</h2>
<p>after uploading your pdf click on it on the file browser</p>
<img src="{{ site.url }}/public/assets/photos/posts/embedding-a-pdf-on-RealGeeks-website/clicking-pdf-file-on-filebrowser.png" alt="clicking pdf file on filebrowser"/>
<p>copy the url of the PDF file</p>
<img src="{{ site.url }}/public/assets/photos/posts/embedding-a-pdf-on-RealGeeks-website/copying-URL-of-pdf-file-on-filebrowser.png" alt="copying URL of pdf file on filebrowser"/>

<h2>Adding code to the desired page</h2>
<p>go to the page where you want to add the code at the admin panel and click on <code class="language-plaintext highlighter-rouge"><></code> to open the backend editor</p>
<img src="{{ site.url }}/public/assets/photos/posts/embedding-a-pdf-on-RealGeeks-website/showing-pdf-file-on-desired-page.png" alt="showing pdf file on desired page"/>

<h2>The PDF should show now on the new page</h2>
<img src="{{ site.url }}/public/assets/photos/posts/embedding-a-pdf-on-RealGeeks-website/embedding-pdf-file-code-on-desired-page.png" alt="embedding pdf file code on desired page"/>

<h2>Changing Size of the youtube video</h2>
<p>You could be changing the height and width of the embed PDF frame. in the example above width is set to 725 and height is set to 900, you could change those values to better fit the youtube video in your website and page.</p>

<p>Do you have any questions? <a href="/contact-rauof/">Contact Us Now!</a></p>
