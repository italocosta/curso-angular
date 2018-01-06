import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ContatoService } from "./contato.service";
import { Location } from "@angular/common";
import { Contato } from "./contato.model";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'

})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.contato = new Contato(0, '', '', '');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }
        })
    }

    getFormGroupClass(isDirty: boolean): {} {
        return {
            'form-group' : true,
            'was-validated': isDirty
        }
    }

    onSubmit(): void{
        if(this.isNew){
            console.log("novo");
        }
    }

}