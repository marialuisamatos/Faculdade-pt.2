function valida(formulario) {
	if (formulario.nome.value == "") {
		alert("Preencha o campo NOME");
		formulario.nome.focus();
		certo = false;
	} else if ((formulario.nome.value.length < 3) || (formulario.nome.value.length > 30)) {
		alert("O campo NOME não pode menos do que 3 e mais do 30 caracteres");
		formulario.nome.focus();
		certo = false;
	} else if (formulario.email.value == "") {
		alert("Preencha o campo E-MAIL");
		formulario.email.focus();
		certo = false;
	} else if (!formulario.email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
		alert("Digite um E-MAIL válido");
		formulario.email.focus();
		certo = false;
	} else if (isNaN(formulario.telefone.value)) {
		alert("O campo TELEFONE deverá conter números");
		formulario.telefone.focus();
		certo = false;
	} else if ((formulario.telefone.value.length < 10) || (formulario.telefone.value.length > 11)) {
		alert("O campo TELEFONE não pode menos do que 10 e mais do 11 caracteres");
		formulario.telefone.focus();
		certo = false;
	} else if ((formulario.endereco.value.length < 10) || (formulario.endereco.value.length > 50)) {
		alert("O campo ENDEREÇO não pode menos do que 10 e mais do 50 caracteres");
		formulario.endereco.focus();
		certo = false;
	} else if ((formulario.senha.value.length < 5) || (formulario.senha.value.length > 20)) {
		alert("O campo SENHA não pode menos do que 5 e mais do 20 caracteres");
		formulario.senha.focus();
		certo = false;
	} else {
		certo = true;
	}
}

function envia() {
	if (certo) {
		formulario.submit();
	}
}