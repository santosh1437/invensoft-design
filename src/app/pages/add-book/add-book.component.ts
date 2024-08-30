import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addBook_validation_messages } from 'src/app/validation-msg';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  public addButton:any =  FormGroup; 
  public validationErrorMessages: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.validationErrorMessages = this.getErrorMessages();
    this.addButton = this.fb.group({
      isbnNum: [
        '', 
        [
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(50), 
          Validators.pattern(/^[0-9]+$/)
        ]
      ],
      name: [
        '', 
        [
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(50), 
          Validators.pattern(/^[a-zA-Z\s]+$/)
        ]
      ],
      author: [
        '', 
        [
          Validators.required,
          Validators.maxLength(50), 
          Validators.pattern(/^[a-zA-Z\s]+$/)
        ]
      ],
      publication: [
        '', 
        [
          Validators.required,
          Validators.minLength(5), 
          Validators.maxLength(50), 
          Validators.pattern(/^[a-zA-Z\s]+$/)
        ]
      ],
      details: [
        '', 
        [
          Validators.required,
          Validators.minLength(5), 
          Validators.maxLength(250), 
          Validators.pattern(/^[a-zA-Z0-9\s]+$/)
        ]
      ],
      qty: [
        '', 
        [
          Validators.required, 
          Validators.minLength(1), 
          Validators.maxLength(5), 
          Validators.pattern(/^[0-9]+$/)
        ]
      ],
      price: ['', Validators.required],
      branch: ['', Validators.required]
    });
  }

  private getErrorMessages() {
    return addBook_validation_messages;
  }
}
