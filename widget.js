const toggleButton = document.getElementById('chat-toggle');
const panel = document.getElementById('chat-panel');
const closeButton = document.getElementById('chat-close');

toggleButton.addEventListener('click', () => {
    panel.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
    panel.classList.add('hidden');
});
