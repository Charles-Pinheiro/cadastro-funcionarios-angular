import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-read-detail',
  templateUrl: './funcionario-read-detail.component.html',
  styleUrls: ['./funcionario-read-detail.component.css']
})
export class FuncionarioReadDetailComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    cargo: '',
    idade: null,
    salario: null,
    imgURL: '',
  };

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.funcionarioService.readById(+id).subscribe(funcionario => {
        this.funcionario = funcionario;
      })
    }
  }

}
