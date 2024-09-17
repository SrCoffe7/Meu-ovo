document.getElementById('limparBtn').addEventListener('click', function() {
    document.getElementById('cadastroForm').reset();
});

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const referencia = document.getElementById('referencia').value;
    const ddd = document.getElementById('ddd').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    alert(`Dados enviados com sucesso! \n
           Nome: ${nome} \n
           Data de Nascimento: ${dataNascimento} \n
           CPF: ${cpf} \n
           Endereço: ${rua}, ${numero}, ${complemento} \n
           Ponto de Referência: ${referencia} \n
           Contato: (${ddd}) ${telefone} \n
           E-mail: ${email}`);
});
