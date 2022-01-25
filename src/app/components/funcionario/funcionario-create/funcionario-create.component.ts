import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    cargo: '',
    idade: null,
    salario: null,
    imgURL: '',
  }

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarFuncionario(): void {
    this.funcionarioService.create(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage('Funcionário registrado!');
      this.router.navigate(['funcionarios']);
    })
  }

  cancel(): void {
    this.router.navigate(['funcionarios']);
  }
}
