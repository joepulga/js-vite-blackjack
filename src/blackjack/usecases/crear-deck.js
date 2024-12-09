import _ from "underscore";

/**
 *  Esta Función crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de String');
    // if(!tiposDeCarta ) throw new Error('TiposDeCarta es obligatorio');
    // if(tiposDeCarta.length > 0 ) throw new Error('TiposDeCarta tiene que ser un arreglo de strings');

    let deck = [];
    for( let i = 2; i <= 10; i ++){
        for( let tipo of tiposDeCarta) {
            deck.push( i + tipo);
        }
    }
    for( let tipo of tiposDeCarta){
        for( let esp of tiposEspeciales){
            deck.push( esp + tipo);
        }
    }
    return _.shuffle(deck);
} 