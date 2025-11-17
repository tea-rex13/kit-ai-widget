# AI Chat Widget – To-Do List

## Phase 0 – Planning
- [ ] Define the assistant’s purpose (CV helper, coding helper, general Q&A)
- [ ] Decide where the widget appears on the site
- [ ] Choose a simple visual style that fits the portfolio

---

## Phase 1 – Front-end widget (no AI yet)

### Step 1: Entry button
- [ ] Add HTML for the floating chat button
- [ ] Add CSS for fixed bottom-right positioning
- [ ] Add base styling (size, border, hover effect)

### Step 2: Chat panel structure
- [ ] Add hidden chat window HTML (header, messages area, input row)
- [ ] Add CSS for layout and positioning
- [ ] Add JS to open and close the panel

### Step 3: Local chat behaviour
- [ ] Capture user input and display messages
- [ ] Add a simple simulated reply
- [ ] Auto-scroll to the newest message
- [ ] Ignore empty messages

---

## Phase 2 – Backend: AI link

### Step 4: Server function
- [ ] Create a serverless function or small backend route
- [ ] Add environment variables for the API key
- [ ] Write handler to send messages to an AI model and return the reply
- [ ] Add basic checks (message length etc.)

### Step 5: Connect front-end to backend
- [ ] Replace fake replies with a `fetch` call
- [ ] Add a loading or thinking line
- [ ] Add error handling
- [ ] Check replies render cleanly

---

## Phase 3 – Context and behaviour

### Step 6: Kit-aware chat
- [ ] Add a system prompt describing the assistant’s role
- [ ] Add experience and project details as reference material
- [ ] Add short-term memory per chat session
- [ ] Add safe fallbacks for unknown questions

---

## Phase 4 – Polish and deployment

### Step 7: UI and UX improvements
- [ ] Add close button in the header
- [ ] Improve mobile layout
- [ ] Refine colours and spacing
- [ ] Add keyboard access
- [ ] Add smooth open/close animation
- [ ] Hide the panel on outside click

### Step 8: Deployment checks
- [ ] Test widget on Netlify
- [ ] Test on mobile and tablet
- [ ] Review load speed
- [ ] Update the README with any new details

