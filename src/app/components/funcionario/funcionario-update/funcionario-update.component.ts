import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    cargo: '',
    idade: null,
    salario: null,
    imgURL: ''
  };

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Editar Dados do Colaborador',
      icon: 'engineering',
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

  editarFuncionario(): void {
    this.funcionarioService.update(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage('Dados atualizados!');
      this.router.navigate([`/funcionarios/${this.funcionario.id}`]);
    });
  }

  cancel(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/funcionarios/${id}`]);
  }
}
