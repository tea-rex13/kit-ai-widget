const toggleButton = document.getElementById('chat-toggle');
const panel = document.getElementById('chat-panel');
const closeButton = document.getElementById('chat-close');

function openChat() {
    panel.classList.remove('hidden');
    panel.setAttribute('aria-hidden', 'false');
}

function closeChat() {
    panel.classList.add('hidden');
    panel.setAttribute('aria-hidden', 'true');
}

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
