# RealtorToThrive

Jekyll site for RealtorToThrive, a custom real estate website and migration practice for established agents, teams, and brokerages in the United States.

## Develop

```bash
bundle install
bundle exec jekyll serve
```

The site stays on Jekyll. Layouts are in `_layouts`, shared markup is in `_includes`, and navigation, services, and process steps are in `_data`.

## Consultation form

The contact form is a Netlify Form:

```html
<form name="contact" method="POST" action="/thank-you/" netlify>
```

Netlify detects it from the published HTML and stores each submission. A successful post redirects to `/thank-you/`. The stored fields are `name`, `email`, `company`, `website`, `platform`, `service`, and `details`.

Enable Form detection on the Netlify site, and send the form notifications to `rauof@realtortothrive.com`. A deploy that is not on Netlify will not store the submission.

## Canonical host

Canonical URLs use `url` in `_config.yml` (`https://www.realtortothrive.com`). The `CNAME` file is unchanged. Confirm that the live host redirects to that canonical before launch.
