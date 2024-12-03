import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando o CommonModule

@Component({
  selector: 'app-form',
  standalone: true,  // Definindo que este componente é standalone
  imports: [CommonModule],  // Importando o CommonModule para usar o *ngFor
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // Definindo os campos do formulário
  @Input() fields: { label: string, type: string, placeholder?: string }[] = [];
}
