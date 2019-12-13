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
  - the fifth settlement
  - cairo
  - egypt
---

<div id="our-portfolio">
  <h1>Our Portfolio</h1>
  <section class="customSection customCommunities" style="padding-top:0px;">
      <div class="customCommunities-content">
          <ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3 text-center">
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

            <!-- <li>
                <div class="community-container"><img src="{{site.url}}/public/assets/photos/portfolio-website-photos/summitsellsrealestate-scr.png" alt="portfolio example Summit Sells Real Estate website Screenshot" width="400" height="300">
                    <div class="community-description">
                        <h3>Summit Sells Real Estate</h3>
                    </div>
                    <div class="community-overlay"></div>
                    <div class="community-link-overlay"><a href="https://www.summitsellsrealestate.com/">&nbsp;</a></div>
                </div>
            </li> -->
            <!-- <li>
                <div class="community-container"><img src="{{site.url}}/public/assets/photos/portfolio-website-photos/askforashlea-scr.png" alt="portfolio example Ask For Ashlea website Screenshot" width="400" height="300">
                    <div class="community-description">
                        <h3>Ask For Ashlea</h3>
                    </div>
                    <div class="community-overlay"></div>
                    <div class="community-link-overlay"><a href="https://www.askforashlea.com/">&nbsp;</a></div>
                </div>
            </li> -->
            <!-- <li>
                <div class="community-container"><img src="{{site.url}}/public/assets/photos/portfolio-website-photos/theresidentialgroup-scr.png" alt="portfolio example The Residential Group website Screenshot" width="400" height="300">
                    <div class="community-description">
                        <h3>The Residential Group</h3>
                    </div>
                    <div class="community-overlay"></div>
                    <div class="community-link-overlay"><a href="https://www.theresidentialgroup.com/">&nbsp;</a></div>
                </div>
            </li>
            <li>
                <div class="community-container"><img src="{{site.url}}/public/assets/photos/portfolio-website-photos/carturgroup-scr.png" alt="portfolio example Cartur Group website Screenshot" width="400" height="300">
                    <div class="community-description">
                        <h3>Cartur Group</h3>
                    </div>
                    <div class="community-overlay"></div>
                    <div class="community-link-overlay"><a href="https://www.carturgroup.com/">&nbsp;</a></div>
                </div>
            </li>
            <li>
                <div class="community-container"><img src="{{site.url}}/public/assets/photos/portfolio-website-photos/chrisreisbeckhomes.png" alt="portfolio example Chrisreisbeck Homes website Screenshot" width="400" height="300">
                    <div class="community-description">
                        <h3>Chrisreisbeck Homes</h3>
                    </div>
                    <div class="community-overlay"></div>
                    <div class="community-link-overlay"><a href="https://www.chrisreisbeckhomes.com/">&nbsp;</a></div>
                </div>
            </li> -->
          </ul>
          <a href="/realgeeks-buildout-form" class="request-quote">Request a Free Quote</a>
      </div>
  </section>
</div>
