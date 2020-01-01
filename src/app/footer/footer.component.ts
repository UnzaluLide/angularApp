import { Component } from '@angular/core';

@Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    /*tipo any objeto genérico*/
    autor: any ={nombre:'Lide', apellido: 'Unzalu'};
}
