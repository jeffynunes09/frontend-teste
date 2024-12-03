import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}
addBooks() {
  
  this.router.navigate(["/add/authors"])
  
}

}
