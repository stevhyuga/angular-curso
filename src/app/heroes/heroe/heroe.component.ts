import { ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'StevHyuga';
    edad: number = 31;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre() : void{
        this.nombre='SpyderFat';
    }

    cambiarEdad() : void{
        this.edad=25;
    }
}