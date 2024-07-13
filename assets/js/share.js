const button = document.getElementById('copyButton');
const message = document.createElement('div');
message.classList.add('message');
message.textContent = 'Current URL copied!';

button.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href)
    .then(() => {
      document.body.appendChild(message);
      setTimeout(() => {
        message.remove();
      }, 3000); // Hide message after 3 seconds
    })
    .catch(err => {
      console.error('Failed to copy URL:', err);
    });
});
