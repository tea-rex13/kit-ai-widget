const toggleButton = document.getElementById('chat-toggle');
const panel = document.getElementById('chat-panel');
const closeButton = document.getElementById('chat-close');
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const messageArea = document.getElementById('chat-messages');

function openChat() {
    panel.classList.remove('hidden');
    panel.setAttribute('aria-hidden', 'false');
}

function closeChat() {
    panel.classList.add('hidden');
    panel.setAttribute('aria-hidden', 'true');
}

// Toggle behaviour
toggleButton.addEventListener('click', () => {
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
        openChat();
    } else {
        closeChat();
    }
});

closeButton.addEventListener('click', () => {
    closeChat();
});

// Helper to add messages to the chat area
function addMessage(text, sender = 'user') {
    const msg = document.createElement('div');
    msg.classList.add('message', `message--${sender}`);
    msg.textContent = text;
    messageArea.appendChild(msg);

    // Scroll to bottom
    messageArea.scrollTop = messageArea.scrollHeight;
}

// Placeholder call that will later hit your backend
async function fetchAIResponse(userText) {
    // TEMP RESPONSE so you can keep testing:
    await new Promise(resolve => setTimeout(resolve, 500));
    return "I’m not quite wired up yet, but I heard you.";
}

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    // Show user message
    addMessage(text, 'user');
    input.value = '';

    // Show bot typing indicator
    const typingMsg = document.createElement('div');
    typingMsg.classList.add('message', 'message--bot', 'typing');
    typingMsg.textContent = "Typing...";
    messageArea.appendChild(typingMsg);
    messageArea.scrollTop = messageArea.scrollHeight;

    try {
        const reply = await fetchAIResponse(text);

        // Replace the typing message with the real one
        typingMsg.remove();
        addMessage(reply, 'bot');
    } catch (err) {
        typingMsg.textContent = "Something went wrong.";
        typingMsg.classList.remove('typing');
    }
});
