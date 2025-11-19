# AI Chat Widget – To-Do List

## Phase 1 – Front-end widget (no AI yet)

### Step 1: Entry button

- [x] Add HTML for the floating chat button
- [x] Add CSS for fixed bottom-right positioning
- [x] Add base styling (size, border, hover effect)

### Step 2: Chat panel structure

- [x] Add hidden chat window HTML (header, messages area, input row)
- [x] Add CSS for layout and positioning
- [x] Add JS to open and close the panel

### Step 3: Local chat behaviour

- [x] Capture user input and display messages
- [x] Add simulated reply function
- [x] Auto-scroll to the newest message
- [x] Ignore empty messages

### Step 4: Front-end AI hook

- [x] Replace direct fake reply with async fetchAIResponse()
- [x] Add typing indicator in the UI
- [ ] Point fetchAIResponse at real backend (later)

---

## Phase 2 – Backend: AI link

### Step 5: Server function

- [x] Create a serverless function / backend endpoint
- [x] Use environment variables for the API key
- [x] Call AI model and return reply

### Step 6: Connect front-end to backend

- [x] Replace fake replies with a `fetch` call
- [x] Add a loading or thinking line
- [x] Add error handling
- [x] Check replies render cleanly

---

## Phase 3 – Context and behaviour

### Step 7: Kit-aware chat

- [ ] Add a system prompt describing the assistant’s role
- [ ] Add experience and project details as reference material
- [ ] Add short-term memory per chat session
- [ ] Add safe fallbacks for unknown questions

---

## Phase 4 – Polish and deployment

### Step 8: UI and UX improvements

- [ ] Add close button in the header
- [ ] Improve mobile layout
- [ ] Refine colours and spacing
- [ ] Add keyboard access
- [ ] Add smooth open/close animation
- [ ] Hide the panel on outside click

### Step 9: Deployment checks

- [ ] Test widget on Netlify
- [ ] Test on mobile and tablet
- [ ] Review load speed
- [ ] Update the README with any new details
