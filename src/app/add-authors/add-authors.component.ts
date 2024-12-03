import { Component } from '@angular/core';
import { FormAuthorComponent } from "../form-author/form-author.component";

@Component({
  selector: 'app-add-authors',
  standalone:true,
  imports: [FormAuthorComponent],
  templateUrl: './add-authors.component.html',
  styleUrl: './add-authors.component.css'
})
export class AddAuthorsComponent {

 
}