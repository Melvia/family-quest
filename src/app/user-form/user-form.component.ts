import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  @ViewChild('mdInputEl') public mdInputEl: ElementRef;
  constructor(private fb: FormBuilder) { }


  public cardMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  ngOnInit(): void {
    this.form = this.fb.group({
      card: ['', Validators.pattern(/^[0-9]{16}$/)]
    });

  }

}
