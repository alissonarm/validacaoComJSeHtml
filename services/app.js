import { validarInput } from "./validar.js";

window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        console.log(input);
        input.addEventListener('input', () => {
                validarInput(input);
        });
    });
};