import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-funcionario-crud',
  templateUrl: './funcionario-crud.component.html',
  styleUrls: ['./funcionario-crud.component.css']
})
export class FuncionarioCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Colaboradores',
      icon: 'groups',
    }
  }

  ngOnInit(): void { }

  irParaCriacaoFuncionario(): void {
    this.router.navigate(['/funcionarios/registrar']);
  }
}
