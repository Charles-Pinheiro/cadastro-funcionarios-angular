import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    cargo: '',
    idade: null,
    salario: null,
    imgURL: '',
  }

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Remover Colaborador',
      icon: 'person_remove_alt_1',
    }
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.funcionarioService.readById(+id).subscribe(funcionario => {
        this.funcionario = funcionario;
      });
    }
  }

  deletarFuncionario(): void {
    if (this.funcionario.id) {
      this.funcionarioService.delete(this.funcionario.id).subscribe(() => {
        this.funcionarioService.showMessage('Dados deletados!');
        this.router.navigate(['/funcionarios']);
      });
    }
  }

  cancel(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/funcionarios/${id}`]);
  }
}
