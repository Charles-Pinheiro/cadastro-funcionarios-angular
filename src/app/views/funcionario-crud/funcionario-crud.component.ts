import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-crud',
  templateUrl: './funcionario-crud.component.html',
  styleUrls: ['./funcionario-crud.component.css']
})
export class FuncionarioCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaCriacaoFuncionario(): void {
    this.router.navigate(['/funcionarios/registrar']);
  }
}
