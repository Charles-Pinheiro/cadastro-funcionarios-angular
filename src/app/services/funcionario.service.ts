import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar'

import { Funcionario } from '../model/funcionario.model';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  // baseURL = 'api/funcionarios';
  baseURL = 'http://localhost:3000/funcionarios';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  handleError(err: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseURL, funcionario).pipe(
      map(obj => obj),
      catchError(err => this.handleError(err))
    );
  }

  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseURL).pipe(
      map(obj => obj),
      catchError(err => this.handleError(err))
    );
  }

  readById(id: number): Observable<Funcionario> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Funcionario>(url).pipe(
      map(obj => obj),
      catchError(err => this.handleError(err))
    );
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseURL}/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario).pipe(
      map(obj => obj),
      catchError(err => this.handleError(err))
    );
  }

  delete(id: number): Observable<Funcionario> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Funcionario>(url).pipe(
      map(obj => obj),
      catchError(err => this.handleError(err))
    );
  }
}
