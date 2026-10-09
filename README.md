# Cameron PC Support

The complete static website is in `index.html`. Styling, icons and email enquiry logic are included in that file. No npm installation, database, API key or build step is required.

## Upload to GitHub

1. Extract the ZIP on your computer.
2. Create or open your GitHub repository.
3. Select **Add file → Upload files**.
4. Upload the extracted files into the repository root and commit them. Upload the files, not the ZIP or an extra parent folder.

GitHub stores the source files. This package does not automatically publish the site or change the existing private website. A static hosting service connected to this repository can serve the root `index.html` directly with no build command.

## Activate booking enquiries

Open `index.html` and find:

```js
const BOOKING_EMAIL = '';
```

Put your actual receiving email address inside the quotes and commit the change. The address will be visible on the public website, so use the address intended for customer enquiries.

Until a valid email address is entered, the booking button remains disabled. After configuration, the form opens an email draft containing the service, postcode, computer details and problem. The visitor reviews and sends the draft through their own email app. The address is also shown as a fallback if the email app does not open.

The website does not send mail through a server, take payment, store enquiry data or confirm appointments automatically.

## Preview and edit

- Open `index.html` in a browser to preview it.
- Change prices, descriptions, appointment times and FAQs directly in that file.
- Change colours through the CSS variables near the beginning of the file.
- Check your service availability and business arrangements before accepting customers.

## Included files

- `index.html`: the full website.
- `README.md`: these instructions.
- `.gitignore`: excludes temporary output and operating-system files.

No GitHub repository has been created or uploaded on your behalf.
