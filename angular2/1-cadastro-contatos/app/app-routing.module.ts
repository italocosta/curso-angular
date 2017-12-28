import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

const appRoputes: Routes = [
    {
        path: '',
        redirectTo: '/contato',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoputes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}