function authenticate() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('error');
  const terminal = document.querySelector('.terminal');
  const lore = document.getElementById('lore');

  // Example static credentials (can be encrypted later)
  const correctUser = 'agentjax';
  const correctPass = 'hasTheBall';

  if (username === correctUser && password === correctPass) {
    terminal.classList.add('hidden');
    lore.classList.remove('hidden');
  } else {
    error.classList.remove('hidden');
  }
}