const ehUmCPFComNumerosRepetidos = cpf => {
    const cpfsInvalidos = [
        "11111111111",
        "22222222222", 
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ];
    return cpfsInvalidos.includes(cpf);
}

const calcularTotal = (multiplicador) => (resultado, numeroAtual) => resultado + numeroAtual * multiplicador--;


const calcularDigito = (parteCPF, multiplicador) => {
    // total = multiplicacao dos numeros
    // resto = total % 11
    // digito = 11 - resto

    // parteCPF = ["3", "2", "3", "4", "5" ....]
    const total = parteCPF.reduce(calcularTotal(multiplicador), 0);
    const resto = total % 11;
    let digito = 11 - resto;

    if(digito>9){
        digito = 0;
    }
    return digito;
};

export const validarCPF = input => {
    const cpfNumeros = input.value.replace(/\D/g,"");
    
    if(ehUmCPFComNumerosRepetidos(cpfNumeros)){
        input.setCustomValidity("Erro CPF"); // Este não é um CPF válido
        return;
    }

    const primeiraParteCPF = cpfNumeros.substr(0, 9).split("");
    const primeiroDigitoCPF = Number(cpfNumeros.charAt(9));
    const primeiroDigitoCalculado = calcularDigito(primeiraParteCPF, 10);

    // console.log(primeiroDigitoCalculado);
    if(primeiroDigitoCPF ==! primeiroDigitoCalculado){
        input.setCustomValidity("Erro CPF");
        return;
    }

    const segundaParteCPF = cpfNumeros.substr(0, 10).split("");
    const segundoDigitoCPF = Number(cpfNumeros.charAt(10));
    const segundoDigitoCalculado = calcularDigito(segundaParteCPF, 11);

    console.log(segundoDigitoCalculado);
    console.log(segundoDigitoCPF);
    
    if(segundoDigitoCPF ==! segundoDigitoCalculado){
        input.setCustomValidity("Erro CPF");
        return;
    }

    input.setCustomValidity("");
    return;
}