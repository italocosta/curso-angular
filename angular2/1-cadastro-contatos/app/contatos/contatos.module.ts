import { NgModule } from "@angular/core";
import { ContatosListaComponent } from "./contatos-lista.component";
import { CommonModule} from '@angular/common'
import { ContatoDetalheComponent } from "./contato-detalhe.component";
import { ContatoRoutingModule } from "./contato-routing.module";

@NgModule({
    imports:[
        CommonModule,
        ContatoRoutingModule
    ],
    declarations:[
        ContatosListaComponent,
        ContatoDetalheComponent
    ]
})
export class ContatosModule {}