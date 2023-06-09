import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormControlName, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginModel } from './loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:any;
  public Obj = new LoginModel();
 
  constructor(private router : Router,public service:LoginService)
   {    }

  ngOnInit(): void {
  }
  LoginForm =new FormGroup({
    'email' : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+[.+-_]{0,1}[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}')]),
    'password' : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{8,}')])
  })

  responsedata: any;

Login() {
  this.Obj.email = this.LoginForm.value.email;
  this.Obj.password = this.LoginForm.value.password;

  this.service.login(this.Obj).subscribe(
    (res: any) => {
      console.log(res);
      this.responsedata = res;
      this.userId = this.responsedata.userId;
      this.service.set(this.userId);
      if(this.Obj.email == "admin@example.com"){
        alert("Admin Login Successful");
        this.LoginForm.reset();
        this.router.navigate(['admin/centerprofile']);
      }else{
        alert("Login Successful");

        this.service.isLoggedInToken = this.responsedata.jwtToken;
        localStorage.setItem('token', this.responsedata.jwtToken);
        localStorage.setItem('userRole', this.responsedata.userType);
  
        this.LoginForm.reset();
        this.router.navigate(['user/homepage']);
      }
      
    },
    (err: any) => {
      alert("Login failed");
      this.LoginForm.reset();
      console.log(err);
    }
  );
}

  get email(){
    return this.LoginForm.get('email');
  }

  get password(){
    return this.LoginForm.get('password');
  }

}
