import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseURL = 'http://localhost:3000/funcionarios';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseURL, funcionario);
  }

  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseURL);
  }

  readById(id: number): Observable<Funcionario> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Funcionario>(url);
  }
}
