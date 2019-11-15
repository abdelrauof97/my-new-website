---
layout: post
title: using psysh to debug on Laravel
---

<h2>why you should use psysh to debug on Laravel?</h2>
<p class="message">while working on Laravel, Is their is a good way for easy and effective debug more than running endless <code class="language-plaintext highlighter-rouge">var_dump()</code> and <code class="language-plaintext highlighter-rouge">die()</code> iterations?</p>
<p>fortunately their is a way to figure this quickly on Laravel called <a href="https://psysh.org/">Psysh</a> this is already provided out of the box with the <a href="https://laravel-news.com/laravel-tinker">tinker</a> package which is installed by default when you install Laravel, and I recommend to see this documentation about tinker if you are not familiar with it from here <a href="https://laravel-news.com/laravel-tinker">Laravel tinker</a>.</p>
{% highlight php %}
"laravel/tinker": "~1.0",
{% endhighlight %}

<h2>and now, how you could use Psysh as interactive debugger?</h2>

<p>this is very easy and simple like dropping the following line of code on the point you want to debug it.</p>
{% highlight php %}
eval(\psy\sh());
{% endhighlight %}

<h2>real example of using Psysh?</h2>

<p>you could use Psysh on debugging Controller, Model, or a view ...etc, what is going absolutely to make your life's easier.</p>

<p>and here an example of debugging some code on the controller using our magic Psysh.</p>
<img data-media-urn="" data-li-src="https://media.licdn.com/dms/image/C5612AQE0k32LsJ7t6Q/article-inline_image-shrink_1500_2232/0?e=1577923200&amp;v=beta&amp;t=DFvqb5P0xSXNFOMIUgJPGcs1sZHuoz9fNO5uxT48L6c" src="https://media.licdn.com/dms/image/C5612AQE0k32LsJ7t6Q/article-inline_image-shrink_1500_2232/0?e=1577923200&amp;v=beta&amp;t=DFvqb5P0xSXNFOMIUgJPGcs1sZHuoz9fNO5uxT48L6c">

<p>the marked line is our break point which will make the difference, it supposed to freeze the create action process when it arrived that point and stay there and it will open the interactive shell on the terminal so we could debug things untill that point. so let's run server and go to the /create path or the path for create action to make that happens. and after that we look at the terminal to see </p>

<img data-media-urn="" data-li-src="https://media.licdn.com/dms/image/C5612AQHAYAjUVv35Cg/article-inline_image-shrink_1000_1488/0?e=1577923200&amp;v=beta&amp;t=xYT4Wh69l8tyqzqItF8H_vu4AFS5z0eDrY8pBuqPtOI" src="https://media.licdn.com/dms/image/C5612AQHAYAjUVv35Cg/article-inline_image-shrink_1000_1488/0?e=1577923200&amp;v=beta&amp;t=xYT4Wh69l8tyqzqItF8H_vu4AFS5z0eDrY8pBuqPtOI">

<p>Awesome! we could now see our break point obviously, you could notice the line where the break point line of code lays and more than that, you could run <code class="language-plaintext highlighter-rouge">ls</code> command to see the variables until that point. and enjoy debugging :)</p>
