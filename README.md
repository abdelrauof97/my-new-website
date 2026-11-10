# RealtorToThrive

Jekyll site for RealtorToThrive, a custom real estate website and migration practice for established agents, teams, and brokerages in the United States.

## Develop

```bash
bundle install
bundle exec jekyll serve
```

The site stays on Jekyll. Layouts are in `_layouts`, shared markup is in `_includes`, and navigation, services, and process steps are in `_data`.

## Consultation form

`form_endpoint` in `_config.yml` is blank on purpose.

- While it is blank, the consultation form opens the visitor's email app with the inquiry addressed to `email`. The site does not store the submission and does not claim that it did.
- To deliver inquiries on the server, set `form_endpoint` to the full HTTPS URL from your form provider. The POST fields are `name`, `email`, `company`, `website`, `platform`, `service`, and `details`.

Restart Jekyll after changing `_config.yml`.

## Canonical host

Canonical URLs use `url` in `_config.yml` (`https://www.realtortothrive.com`). The `CNAME` file is unchanged. Confirm that the live host redirects to that canonical before launch.
