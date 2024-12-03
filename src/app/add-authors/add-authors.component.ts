import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-add-authors',
  imports: [FormComponent],
  templateUrl: './add-authors.component.html',
  styleUrl: './add-authors.component.css'
})
export class AddAuthorsComponent {
  fields = [
    { label: 'Nome', type: 'text', placeholder: 'Digite o nome do autor' },
    { label: 'Data de Nascimento', type: 'date' }
  ];

  handleFormSubmit(formData: any) {
    console.log('Dados do formulário:', formData);
   
}
}