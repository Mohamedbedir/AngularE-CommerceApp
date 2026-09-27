import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { ToastrService } from '@relynn/ngx-toastr';
import { PayloadService } from '../../Services/payload-service';

@Component({
  imports: [RouterLink,FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  user={
    email:'',
    password:''
  }
  isSubmitting = false;


constructor(private _authService:AuthService,private router:Router,private toaster:ToastrService,
  private _payloadService:PayloadService) {}



  Submit(loginform:any){
    if(loginform.valid){
      this.isSubmitting=true
      this._authService.Login(loginform.value).subscribe({
        next:(res)=>{
          this._authService.setToken(res.token);
          this.toaster.success("You are login Successfully", "Login Success",{timeOut: 5000,closeButton: true,progressBar: true});
          loginform.reset();
          if(this._payloadService.getRole()=="Admin"){
            this.router.navigateByUrl('/admin')
          }
          else if(this._payloadService.getRole()=="User"){
            this.router.navigateByUrl('/products')
          }
          /*setTimeout(()=>{
              this.router.navigateByUrl('/products')
          },2000)*/
        },
        error: (err) => {
            this.isSubmitting=false

          this.toaster.error(err.error?.message ||
            'Login failed. Check your email and password.', 'Login Error',{timeOut: 5000,closeButton: true,progressBar: true});

        }
      })
    }
    
  }
}
