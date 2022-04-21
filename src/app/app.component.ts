import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IUser, User} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editForm = this.fb.group({
    fullname: [null, ],
    email: [null, ],
    password: [null, ],
  });


  constructor( protected fb: FormBuilder,) {
  }
  save():void {
    if (this.editForm.valid) {
      const userForm = this.createFromForm();
      console.log(userForm);
      //this.registerService.create(userForm)
    }
  }

  protected createFromForm(): IUser {
    return {
      ...new User(),
      fullName: this.editForm.get(['fullname'])!.value,
      email: this.editForm.get(['email'])!.value,
      password: this.editForm.get(['password'])!.value,
    };
  }
}
