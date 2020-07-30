export const validarPreco = (input) => {
    const preco = input.formatToNumber();

    if (preco === 0){
        input.setCustomValidity("O valor do produto esta zerado")
        return;
    }
    input.setCustomValidity("");
    return;
}