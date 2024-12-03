import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-author',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './form-author.component.html',
  styleUrl: './form-author.component.css'
})
export class FormAuthorComponent {

  constructor( private router:Router){}
  name?: string;
  birthDate?: Date;
onSubmit() {

  this.router.navigate(['createdbooks'])
}


}
