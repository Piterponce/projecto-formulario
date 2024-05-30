import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  submitForm() {
    console.log('Formulario enviado');


    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };


    this.http.post<any>('/api/register', userData).subscribe(
      response => {
        console.log('Registro exitoso:', response);
  
      },
      error => {
        console.error('Error al registrar usuario:', error);
    
      }
    );
  }
}