import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ContatoService } from "./contato.service";
import { Location } from "@angular/common";
import { Contato } from "./contato.model";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html',
    styleUrls: [
        'contato-detalhe.component.css'
    ]

})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;

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
                console.log(id);
                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }
        })
    }

}