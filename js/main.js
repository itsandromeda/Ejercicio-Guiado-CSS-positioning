/*global document*/
var contenedor = document.getElementsByClassName("contenedor")[0],
    rosa = document.getElementById("rosa"),
    azul = document.getElementById("azul"),
    verde = document.getElementById("verde"),
    amarillo = document.getElementById("amarillo");

contenedor.style.position = "relative";
contenedor.style.background = "DarkGray";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

azul.style.position = "absolute";
azul.style.top = "250px";
azul.style.right = "0";