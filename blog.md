---
layout: page
title: Blog
pageDescription: View our extensive real Geeks custom design Blog and see how we can help you on your next web project.
keywords:
  - custom real geeks website designs posts
  - Real Geeks Website Designer Blog
  - real estate web design blog
  - Rauof blog
  - web design blog
---

<div id="our-portfolio">
  <h1>Our Blog</h1>
  <div class="container">
    <div class="row">
      <section class="col col-sm-8 customSection customCommunities" style="padding-top:0px;">
          <div class="customCommunities-content">
              <ul class="small-block-grid-1 text-center">
              {% for post in site.posts %}
                  <li>
                      <div class="community-container"><img src="{{site.url}}{{ post.heroImage }}" alt="post example {{ post.title }} website Screenshot" width="400" height="300">
                          <div class="community-description">
                              <h3>{{ post.title }}</h3>
                          </div>
                          <div class="community-overlay"></div>
                          <div class="community-link-overlay"><a href="{{ post.url | prepend: site.baseurl }}">&nbsp;</a></div>
                      </div>
                  </li>
              {% endfor %}
              </ul>
          </div>
      </section>
      <div class="col col-sm-4 related">
        <h3>Posts</h3>
        <ul class="related-posts">
          {% for post in site.posts %}
            <li>
              <h5>
                <a href="{{ post.url }}">
                  {{ post.title }}
                </a>
              </h5>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>
