import { cpf } from 'cpf-cnpj-validator';
/*export function verifyCPF(cpf: string): boolean {

}*/

export class DocumentVerifier {
  private documentNumber: string;

  constructor(documentNumber: string) {
    this.documentNumber = documentNumber;
  }

  get cpf(): boolean {
    return cpf.isValid(this.documentNumber);
  }
}
