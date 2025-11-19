# Kit AI Widget

A small chat widget for Kit Baker-Bassett’s portfolio.

This repo is focused on the **front-end widget code**: the floating chat
button, chat panel UI, and client-side logic. The actual AI model call
and serverless function will live in the main CV site (`kbb-cv`), which is
deployed on Netlify.

## Current state

- Floating chat button and panel UI are implemented.
- Local message handling and a placeholder async hook (`fetchAIResponse`)
  are in place.
- The widget is ready to be embedded into other sites (for example,
  `kbb-cv.netlify.app`).

## Deployment

This repo is not deployed as a separate site. Instead:

- The widget JS and CSS will be copied or referenced from the `kbb-cv`
  project.
- A Netlify serverless function (`/.netlify/functions/chat`) will be
  defined in the `kbb-cv` repo and will use `OPENAI_API_KEY` from the
  Netlify environment.

See `TODO.md` for the remaining integration steps.
