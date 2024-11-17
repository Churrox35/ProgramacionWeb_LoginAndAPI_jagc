import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/usuario.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-container">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">TABLA DE USUARIOS</h2>
        </div>
        <div class="card-content">
          <ng-container *ngIf="loading; else loadedContent">
            <div class="skeleton-container">
              <div *ngFor="let item of [1,2,3,4,5,6]" class="skeleton"></div>
            </div>
          </ng-container>
          <ng-template #loadedContent>
            <div class="table-responsive">
              <table class="user-table">
                <thead>
                  <tr>
                    <th>IDENTIFICADOR</th>
                    <th>NOMBRE</th>
                    <th>CORREO ELECTRONICO</th>
                    <th>ROL</th>
                    <th>IMAGENSITA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let user of displayedUsers; trackBy: trackByUserId">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                      <img [src]="user.avatar" [alt]="user.name" width="50">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination">
              <span>MOSTRANDO {{ startIndex + 1 }} AL {{ endIndex }} DE {{ users.length }} ENTRADAS</span>
              <div class="pagination-buttons">
                <button (click)="previousPage()" [disabled]="currentPage === 1" class="btn">ANTERIOR</button>
                <button (click)="nextPage()" [disabled]="endIndex >= users.length" class="btn">SIGUIENTE</button>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .table-container {
        padding: 20px;
        margin: 0 auto;
        max-width: 90%;
      }

      .card {
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background-color: #f8f9fa;
      }

      .card-header {
        background-color: #007bff;
        color: white;
        padding: 16px;
        border-radius: 12px 12px 0 0;
      }

      .card-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .card-content {
        padding: 20px;
      }

      .table-responsive {
        overflow-x: auto;
      }

      .user-table {
        width: 100%;
        margin-top: 20px;
      }

      .user-table th {
        background-color: #e9ecef;
        font-weight: bold;
        text-align: center;
      }

      .user-table td {
        text-align: center;
        vertical-align: middle;
      }

      .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }

      .pagination-buttons {
        display: flex;
        gap: 10px;
      }

      .btn {
        padding: 8px 16px;
        border: none;
        background-color: #007bff;
        color: white;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
      }

      .btn:disabled {
        background-color: #d6d6d6;
        cursor: not-allowed;
      }

      .skeleton-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .skeleton {
        height: 20px;
        background-color: #e0e0e0;
        border-radius: 4px;
        width: 100%;
      }

      .skeleton:nth-child(1) { width: 60%; }
      .skeleton:nth-child(2) { width: 80%; }
      .skeleton:nth-child(3) { width: 70%; }
      .skeleton:nth-child(4) { width: 50%; }
      .skeleton:nth-child(5) { width: 90%; }
      .skeleton:nth-child(6) { width: 75%; }
    `
  ]
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedUsers: User[] = [];
  loading = true;
  currentPage = 1;
  pageSize = 6; // Cambiado de 10 a 6

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.updateDisplayedUsers();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    });
  }

  updateDisplayedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedUsers = this.users.slice(start, end);
  }

  nextPage() {
    if (this.endIndex < this.users.length) {
      this.currentPage++;
      this.updateDisplayedUsers();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedUsers();
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.pageSize, this.users.length);
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}
