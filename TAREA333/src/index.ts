import { CanvasLocal } from './canvasLocal.js';


let canvas =
<HTMLCanvasElement>document.getElementById("circlechart");


let graphics =
canvas.getContext("2d")!;



const miCanvas =
new CanvasLocal(
graphics,
canvas
);



// dibuja algo al abrir

miCanvas.paint([
{
nombre:"Enero",
valor:50
},
{
nombre:"Febrero",
valor:80
},
{
nombre:"Marzo",
valor:30
}

]);





document.getElementById("graficar")?.addEventListener(
"click",
()=>{


let texto =
(<HTMLTextAreaElement>
document.getElementById("datos")).value;



let datos =
texto
.split("\n")
.map(linea=>{


let partes =
linea.split(",");



return {

nombre:partes[0],
valor:Number(partes[1])

};


});



miCanvas.paint(datos);



});