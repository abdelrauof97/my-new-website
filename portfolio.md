---
layout: page
title: Portfolio
pageDescription: View our extensive real estate web design portfolio and see how we can help you on your next web project.
keywords:
  - custom real geeks website designs
  - Real Geeks Website Designer Portfolio
  - real estate web design portfolio
  - Rauof Portfolio
  - web design portfolio
---

<div id="our-portfolio">
  <h1>Our Portfolio</h1>
  <div class="container">
    <div class="row">
      <section class="col col-sm-8 customSection customCommunities" style="padding-top:0px;">
          <div class="customCommunities-content">
              <ul class="small-block-grid-1 text-center">
              {% for portfolio in site.portfolio %}
                  <li>
                      <div class="community-container"><img src="{{site.url}}{{ portfolio.heroImage }}" alt="portfolio example {{ portfolio.title }} website Screenshot" width="400" height="300">
                          <div class="community-description">
                              <h3>{{ portfolio.title }}</h3>
                          </div>
                          <div class="community-overlay"></div>
                          <div class="community-link-overlay"><a href="{{ portfolio.url | prepend: site.baseurl }}">&nbsp;</a></div>
                      </div>
                  </li>
              {% endfor %}
              </ul>
          </div>
      </section>
      <div class="col col-sm-4 related">
        <h3>Portfolio</h3>
        <ul class="related-posts">
          {% for portfolio in site.portfolio %}
            <li>
              <h5>
                <a href="{{ portfolio.url }}">
                  {{ portfolio.title }}
                </a>
              </h5>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>
