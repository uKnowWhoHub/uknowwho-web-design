# uKnowWho Web Design

A responsive static website for Cameron Hudson's web-design business in
Atherton, Greater Manchester.

## Before publishing

Open `script.js` and change `SITE_SETTINGS.contactEmail` if
`hello@uknowwhowebdesign.co.uk` is not your real address.

Also replace the same email in:

- `index.html` structured business information
- `privacy.html`

Review the prices, service descriptions and privacy notice so they match the
service you genuinely intend to provide.

## Publish with GitHub Pages

1. Create a new public GitHub repository.
2. Upload all files and folders from this package.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. GitHub will display the published address after deployment finishes.

The public website uses `index.html`, `app/globals.css`, `script.js`,
`privacy.html` and `public/og.png`. The additional application files are an
optional hosted-site version and can remain in the repository.

## Contact form

The form does not require a server. It prepares an email and opens the visitor's
email application. This is simple and private, but it depends on the visitor
having an email application configured. A hosted form service can be added
later if you want submissions to work directly in the browser.
