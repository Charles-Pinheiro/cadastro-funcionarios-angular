export interface Funcionario {
    id?: number;
    nome: string;
    cargo: string;
    idade: number | null;
    salario: number | null;
    imgURL: string;
}