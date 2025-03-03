document.getElementById('Formulário').addEventListener('submit', function(event) {
    event.preventDefault();

    const Campo1 = parseInt(document.getElementById('Campo1').value);
    const Campo2 = parseInt(document.getElementById('Campo2').value);
    const mensagemDiv = document.getElementById('mensagem');

    if (Campo2 > Campo1) {
        mensagemDiv.textContent = 'Formulário válido! Campo 2 é maior que Campo 1.';
        mensagemDiv.style.color = 'green';
    } else {
        mensagemDiv.textContent = 'Formulário inválido! Campo 2 não é maior que Campo 1.';
        mensagemDiv.style.color = 'red';
    }
});