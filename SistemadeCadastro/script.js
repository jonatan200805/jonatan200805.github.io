const form = document.getElementById('formCadastro');
const lista = document.getElementById('listaPessoas');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (nome === '' || email === '') return;

  const li = document.createElement('li');
  li.innerHTML = `<strong>${nome}</strong> - ${email} 
                  <button class="remove-btn">Remover</button>`;

  li.querySelector('.remove-btn').addEventListener('click', () => {
    li.remove();
  });

  lista.appendChild(li);

  form.reset();
});