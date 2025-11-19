# Kit AI Widget – TODO

## Phase 1 – Widget UI and local behaviour

### Step 1: Entry button

- [x] Add HTML for the floating chat button
- [x] Add CSS for fixed bottom-right positioning
- [x] Add base styling (size, hover effect)

### Step 2: Chat panel structure

- [x] Add hidden chat window HTML (header, messages area, input row)
- [x] Add CSS for panel layout and positioning
- [x] Add JS to open and close the panel

### Step 3: Local chat behaviour

- [x] Capture user input and display messages
- [x] Add simulated reply mechanism
- [x] Auto-scroll to the newest message
- [x] Ignore empty messages

### Step 4: Front-end AI hook

- [x] Replace direct fake reply with async `fetchAIResponse()`
- [x] Add typing indicator while waiting for a reply
- [x] Handle errors with a simple user-facing message
- [ ] Point `fetchAIResponse()` to the real backend once the CV site has the function

---

## Phase 2 – Integration with kbb-cv site

### Step 5: Prepare widget for reuse

- [ ] Confirm widget JS and CSS are self-contained
- [ ] Add a short usage note (how to include the script and styles on another site)
- [ ] Confirm no API keys or environment secrets are referenced directly in this repo

### Step 6: Move backend to kbb-cv

- [ ] Add `netlify/functions/chat.js` to the kbb-cv project
- [ ] Wire the function to use `OPENAI_API_KEY` from Netlify environment variables
- [ ] Update `fetchAIResponse()` here to call the correct endpoint on the kbb-cv site (document the URL)

### Step 7: Embed widget in kbb-cv

- [ ] Add the floating Chat button and panel HTML into the kbb-cv layout/template
- [ ] Include the widget JS and CSS in kbb-cv (direct files or bundled)
- [ ] Test the chat end-to-end on `kbb-cv.netlify.app`

---

## Phase 3 – Nice-to-haves (later)

- [ ] Add keyboard shortcuts (Esc to close, focus management)
- [ ] Add basic conversation context (remember last few messages)
- [ ] Add simple analytics hooks (how often the chat is opened, etc.)

---
