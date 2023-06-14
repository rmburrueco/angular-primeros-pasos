import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 9500
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    addCharacter( character: Character ): void {
        const newCharacter: Character = {
            id: uuid(), ...character //spread todas las propiedades
        }
        this.characters.push(newCharacter);
    }

    // onDeleteCharacter( index: number ): void {
    //     this.characters.splice(index, 1);
    // }

    deleteCharacterById( id: string ){
        // filtra todos los elementos que cumplan la condición. Y te devuelve un array con ellos
        //El que lo cumpla (el que tenga igual id) pues lo va a eliminar porque no lo devuelve
        this.characters = this.characters.filter( character => character.id !== id );
    }
    
}