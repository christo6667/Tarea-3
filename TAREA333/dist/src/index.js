"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvasLocal_js_1 = require("./canvasLocal.js");
let canvas = document.getElementById("circlechart");
let graphics = canvas.getContext("2d");
const miCanvas = new canvasLocal_js_1.CanvasLocal(graphics, canvas);
// dibuja algo al abrir
miCanvas.paint([
    {
        nombre: "Enero",
        valor: 50
    },
    {
        nombre: "Febrero",
        valor: 80
    },
    {
        nombre: "Marzo",
        valor: 30
    }
]);
document.getElementById("graficar")?.addEventListener("click", () => {
    let texto = document.getElementById("datos").value;
    let datos = texto
        .split("\n")
        .map(linea => {
        let partes = linea.split(",");
        return {
            nombre: partes[0],
            valor: Number(partes[1])
        };
    });
    miCanvas.paint(datos);
});
