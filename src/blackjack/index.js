import _ from 'underscore';

import {crearNuevoDeck, DameCarta, ValorDeCarta, crearCarta, divCartasJugadores } from './usecases'

    let deck = [];
    const tipos = ['C','D', 'H', 'S'],
    especiales = ['A','J','Q','K'];
    let puntosJugadores = [];
        
    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');
    // divCartasJugadores = document.querySelectorAll('.divCartas');
    const mostrarCarta = document.querySelectorAll('small');

    // Esta función inicializa el juego
    const inicializarJuego = ( numJugadores = 2) => {
        deck = crearNuevoDeck(tipos, especiales);

        puntosJugadores = [];
        for( let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }
    
        mostrarCarta.forEach(elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );
        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    }

    // turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = (carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + ValorDeCarta( carta );
        mostrarCarta[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    // const crearCarta = (carta, turno ) => {
    //     const imgCarta = document.createElement('img');
    //     imgCarta.src = `assets/cartas/${carta }.png`;
    //     imgCarta.classList.add('carta');
    //     divCartasJugadores[turno].append(imgCarta)
    // }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout( ()=> {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if ( puntosComputadora > 21){
                alert('Jugador Gana');
            }else {
                alert('Computadora gana')
            }
        }, 40 ); 
    }

    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;
    
        do {
        const carta = DameCarta( deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
        crearCarta( carta,  puntosJugadores.length - 1 );
        
        } while( (puntosComputadora < puntosMinimos ) && (puntosMinimos <= 21)  );
        
        determinarGanador();
    }
    
    // Eventos
    btnPedir.addEventListener('click', () => {
    
        const carta = DameCarta(deck);
        const puntosJugador = acumularPuntos ( carta, 0 );

        crearCarta(carta, 0);
        
        if ( puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
    
            turnoComputadora( puntosJugador );
        }else if (puntosJugador === 21) {
            console.warn(' 21, Genial!');  
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
    
        }
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
    
        turnoComputadora(puntosJugadores[0])
    
    });
    
    btnNuevo.addEventListener('click', () => {

        inicializarJuego();       
    }); 






