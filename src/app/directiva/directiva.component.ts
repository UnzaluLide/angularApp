import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent{

  constructor() { }
  listaCursos: string []= ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
}
