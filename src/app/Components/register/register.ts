import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { ToastrService } from '@relynn/ngx-toastr';

@Component({
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register implements OnInit {
  registerform!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder,private _authservice:AuthService ,private router:Router,private toaster:ToastrService) {}
  ngOnInit(): void {
    this.registerform = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    });
  }

  
  OnSubmit() {
    if (this.registerform.invalid) {
      this.registerform.markAllAsTouched();
      return;
    }

    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this._authservice.Register(this.registerform.getRawValue()).subscribe({
      next: (response) => {
        //localStorage.setItem('token', response.token);
        this.toaster.success(
          'Your account was created successfully.',
          'Registration Success',
          { timeOut: 5000, closeButton: true, progressBar: true },
        );
        this.registerform.reset();
        this.isSubmitting = false;
        this.router.navigateByUrl('/auth/login');
      },
      error: (error) => {
        this.isSubmitting = false;
        this.toaster.error(
          error.error?.message || 'Registration failed. Please try again.',
          'Registration Error',
          { timeOut: 5000, closeButton: true, progressBar: true },
        );
      },
    });

  }
  
   get displayName(){
    return this.registerform.get("displayName") 
  } get email(){
    return this.registerform.get("email") 
  } get password(){
    return this.registerform.get("password") 
  }
  get phoneNumber(){
    return this.registerform.get("phoneNumber") 
  }
}
