// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Only "Contact Me" button that opens default mail client
const mailtoBtn = document.getElementById('mailtoBtn');
const recipientEmail = 'shawnikita635@gmail.com';

function openMailTo(to, subject, body) {
  const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

mailtoBtn && mailtoBtn.addEventListener('click', () => {
  const subject = 'Hello from portfolio';
  const body = 'Hi Nikita,\n\nI saw your portfolio and would like to connect.\n\nRegards,';
  openMailTo(recipientEmail, subject, body);
});
