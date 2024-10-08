import { Component, Directive, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'teacher';

  answer = '';

  genders = ['male', 'female'];

  submitted= false;

  user = {
    username: '',
    email: '',
    sercretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }

  // onSubmit(f: NgForm){
  //   console.log(f);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.sercretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.userData.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();

    console.log(this.user);

  }
}