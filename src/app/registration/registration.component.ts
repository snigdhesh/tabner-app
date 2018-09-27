import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from 'app/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,private registrationService:RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: '',
      email: '',
      password: ''
    })
  }

  saveUsers(){
    let m= Object.assign({}, this.registrationForm.value);
    this.registrationService.saveUsers(m).subscribe(
      (res)=>console.log(res,"....from server")
    )

  }
}
