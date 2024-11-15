import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        const user = users.find(
          u => u.email === this.email && u.password === this.password
        );

        if (user) {
          // Email y contraseña correctos
          this.router.navigate(['/dashboard']);
        } else {
          // Email o contraseña incorrectos
          this.error = 'Correo o contraseña incorrectos';
        }
      },
      (error) => {
        // Manejo de errores en la llamada a la API
        this.error = 'Error de conexión. Inténtelo de nuevo.';
        console.error(error);
      }
    );
  }
}