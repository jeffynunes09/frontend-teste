import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Necessário para usar *ngFor
import { FormsModule } from '@angular/forms';  // Necessário para usar [(ngModel)]
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,  // Define que este componente é standalone
  imports: [CommonModule, FormsModule],  // Importa CommonModule e FormsModule
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router:Router){}
  @Input() fields: { label: string, type: string, placeholder?: string }[] = [];

  formData: { [key: string]: string } = {};

  ngOnInit() {
    
    this.fields.forEach(field => {
      const key = this.getFormDataKey(field.label);
      this.formData[key] = ''; 
    });
  }

  
  getFormDataKey(label: string): string {
    return label.toLowerCase().replace(/ /g, '');  
  }

  
  submitForm() {
    console.log('Dados do formulário:', this.formData);
    
    this.router.navigate(["add/authors"])
    
  }
}
