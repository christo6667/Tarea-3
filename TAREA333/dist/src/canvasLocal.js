"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasLocal = void 0;
class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.maxX = canvas.width;
        this.maxY = canvas.height;
    }
    paint(datos) {
        let ctx = this.graphics;
        ctx.clearRect(0, 0, this.maxX, this.maxY);
        // fondo
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.maxX, this.maxY);
        let altoBarra = 45;
        let espacio = 70;
        let inicioX = 120;
        let inicioY = 70;
        let maxValor = Math.max(...datos.map(d => d.valor));
        datos.forEach((dato, i) => {
            let y = inicioY + i * espacio;
            let ancho = (dato.valor / maxValor) * 450;
            // texto
            ctx.fillStyle = "black";
            ctx.font = "18px Arial";
            ctx.fillText(dato.nombre, 20, y + 30);
            // PARTE 3D ABAJO
            ctx.fillStyle = "#777";
            ctx.beginPath();
            ctx.moveTo(inicioX, y + altoBarra);
            ctx.lineTo(inicioX + ancho, y + altoBarra);
            ctx.lineTo(inicioX + ancho + 15, y + altoBarra + 15);
            ctx.lineTo(inicioX + 15, y + altoBarra + 15);
            ctx.closePath();
            ctx.fill();
            // PARTE LATERAL
            ctx.fillStyle = "#444";
            ctx.beginPath();
            ctx.moveTo(inicioX + ancho, y);
            ctx.lineTo(inicioX + ancho + 15, y + 15);
            ctx.lineTo(inicioX + ancho + 15, y + altoBarra + 15);
            ctx.lineTo(inicioX + ancho, y + altoBarra);
            ctx.closePath();
            ctx.fill();
            // CARA PRINCIPAL
            ctx.fillStyle = "#1976d2";
            ctx.fillRect(inicioX, y, ancho, altoBarra);
            // valor
            ctx.fillStyle = "black";
            ctx.fillText(dato.valor, inicioX + ancho + 25, y + 30);
        });
    }
}
exports.CanvasLocal = CanvasLocal;
