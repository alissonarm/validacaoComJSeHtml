import { validarDataNascimento } from "./validarDataNascimento";

import { validarDataNascimento } from "./validarDataNascimento.js";

export const validarInput =(input) => {
        if (input.id === "dataNascimento"){
            validarDataNascimento();
        }
};