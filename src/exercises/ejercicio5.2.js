import {Persona} from './persona.js'

const name = Persona.nombre;

const {edad} = Persona;
const {profesion} = Persona

export function main5_2() {
    console.log('Persona:');
    console.log(`Nombre: ${name}`);
    console.log(`Edad: ${edad}, Profesión: ${profesion}`);
}