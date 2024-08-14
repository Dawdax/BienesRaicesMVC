import express from "express"

export const MensajePrueba = (req, res) => {

    const data = {
        mensaje: "Hola mundo desde nodejs"
    };
    res.json(data);
}
