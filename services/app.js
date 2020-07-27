import { validarInput } from "./validar.js";

window.onload = () => {
    console.log('estou no app');
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        console.log(input);
        input.addEventListener('input', () => {
                validarInput(input, false);
        });

        input.addEventListener('blur', () => {
                validarInput(input);
        });
    });
};