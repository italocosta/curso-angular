import { Injectable } from "@angular/core";

import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos-mock";


@Injectable()
export class ContatoService {

    getContatos(): Promise<Contato[]>{
        return Promise.resolve(CONTATOS);
    }

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve,reject) => {
            setTimeout(resolve,2000);
        })
        .then(() => {
            console.log('Primeiro then');
            return 'Curso de Angular 2 Italo Costa';
        })
        .then((param: string) => {
            console.log('Segundo then');
            console.log(param);

            return new Promise((resolve2,reject2) => {
                setTimeout(() => {
                    console.log('continuando depois de 4 segundos...')
                    resolve2();
                },4000);
            });
        })
        .then(() => {
            console.log('Terceiro then');
            return this.getContatos();
        });
    }

}