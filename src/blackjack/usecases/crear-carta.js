
// import { divCartasJugadores } from "./";

export const divCartasJugadores = document.querySelectorAll('.divCartas');

export const crearCarta = (carta, turno ) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}