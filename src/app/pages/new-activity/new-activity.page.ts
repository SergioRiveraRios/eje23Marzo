import { Component, OnInit } from '@angular/core';

import { ActiviService} from '../../services/activi.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.page.html',
  styleUrls: ['./new-activity.page.scss'],
})
export class NewActivityPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  constructor(private service: ActiviService, private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm(): void{
    this.myForm = this.fb.group({
      tarea: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      detail: ['', Validators.compose([Validators.required])],
      date:['',Validators.compose([Validators.required])]
    });
  }
  saveActivity() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newActivity({
        name: this.myForm.get('name').value,
        detail: this.myForm.get('detail').value,
        status: false,
        date:this.myForm.get('date').value

      });
    }
  }
}
