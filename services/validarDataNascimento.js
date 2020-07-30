export const validarDataNascimento = input => {

    // alert('ola');
    const dataNascimento = new Date(input.value);
    const dataAtual = new Date();

    const dataFaz18 = new Date(
        dataNascimento.getUTCFullYear() + 18,
        dataNascimento.getUTCMonth(),
        dataNascimento.getUTCDay()
    );

    if (dataFaz18 > dataAtual){
        input.setCustomValidity("A idade mínima é de 18 anos");
        return;
    }
    input.setCustomValidity("");
    return;
};

