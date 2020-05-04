export class Tarea {

    constructor(nombre) {
        this.id = new Date().getTime();
        this.nombre = nombre;
        this.completed = false;
    }
}