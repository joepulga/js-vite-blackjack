
import { DameCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos,mostrarCarta, deck ) => {

    let puntosComputadora = 0;

    do {
    const carta = DameCarta( deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
    crearCarta( carta,  puntosJugadores.length - 1 );
    
    } while( (puntosComputadora < puntosMinimos ) && (puntosMinimos <= 21)  );
    
    determinarGanador();
}