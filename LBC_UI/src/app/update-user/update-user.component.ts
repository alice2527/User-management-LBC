import { Component, Inject } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UserService } from '../Service/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  myForm: FormGroup = new FormGroup({})
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: number,private formBuilder: FormBuilder, private userService: UserService ) {

  }
  ngOnInit() {
// Initialize the form with validators
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],

      confirmedPassword: ['', [Validators.required, this.matchPasswords.bind(this)]],

    });


  }
  matchPasswords(control: AbstractControl): { [key: string]: boolean } | null {
    const password = this.myForm.get('password')?.value;
    const confirmedPassword = control.value;

    // Check if passwords match
    if (password !== confirmedPassword) {
      return { 'passwordsNotMatch': true };
    }

    return null;
  }
  onSubmit() {
    console.log("on submit")
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      // Call the getCompanies function from the CompanyService
      this.userService.updateUser(
        this.data,
        formData.password,
        formData.firstName,
        formData.lastName,
        formData.role,
      ).subscribe(
        (response) => {
          // Handle the response from the server if needed
          console.log('Response from server:', response);


          Swal.fire({
            icon: 'success',
            title: 'Great job',
            text: 'Update validé',
          })
        },
        (error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Il y a eu une erreur',
          })
          console.error('Error:', error);
        }

      );
    }
    else{
      const invalidControls = [];
      for (const controlName in this.myForm.controls) {
        if (this.myForm.controls[controlName].invalid) {
          invalidControls.push(controlName);
        }
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Les champs suivants sont invalides ' + invalidControls.join(', '),
      })


    }
  }
}
