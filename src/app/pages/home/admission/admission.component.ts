import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DocumentVerifier } from 'src/app/utils/helpers';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  isLoading: boolean = false;
  showCard: boolean = false;

  startGroup = this._formBuilder.group({
    cpf: ['', Validators.required],
  });

  @ViewChild('stepper') private myStepper!: MatStepper;

  constructor(
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getErrorMessage(): string {
    return 'Informe um CPF válido';
  }

  async onSubmit(): Promise<void> {
    if (this.startGroup.valid) {
      console.log('entrou2');
      const isValidCPF = new DocumentVerifier(String(this.startGroup.controls['cpf'].value)).cpf;
      if (isValidCPF) {
        this.isLoading = !this.isLoading;
        await new Promise(r => setTimeout(r, 1000));
        this.isLoading = !this.isLoading;
        this.showCard = true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao realizar requisição!',
          text: this.getErrorMessage(),
          confirmButtonColor: '#B22222',
        })
      }
    }
  }

}
