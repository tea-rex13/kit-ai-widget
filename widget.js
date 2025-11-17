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

// Fake bot reply (placeholder logic)
function fakeBotReply(userText) {
    return `You said: ${userText}`;
}

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    // Show user message
    addMessage(text, 'user');

    input.value = '';

    // Fake bot response
    const reply = fakeBotReply(text);
    setTimeout(() => {
        addMessage(reply, 'bot');
    }, 400);
});
