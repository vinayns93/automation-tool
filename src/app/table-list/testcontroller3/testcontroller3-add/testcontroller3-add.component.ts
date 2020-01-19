import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController3 } from '../../../models/testcontroller3.model';
import { TestControllerService } from '../../../services/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testcontroller3-add',
  templateUrl: './testcontroller3-add.component.html',
  styleUrls: ['./testcontroller3-add.component.scss']
})
export class Testcontroller3AddComponent implements OnInit {
  testController3:TestController3;
  testControllerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    vmid: new FormControl('', Validators.required),
    browser: new FormControl('', Validators.required),
    exec: new FormControl('', Validators.required)
  });
  constructor(private route:ActivatedRoute, private controllerservice:TestControllerService,private router: Router) { 
  }

  ngOnInit() {
    this.populateFormFields();
  }

  populateFormFields() {
    if (this.testControllerForm) {
      this.testControllerForm.reset();
    }
    this.testControllerForm.patchValue({
      id: this.testController3.id,
      vmid: this.testController3.vmid,
      browser: this.testController3.browser,
      exec: this.testController3.exec
    });
   }

  onSubmit() {
    let data = new TestController3();
    data.id = this.testControllerForm.controls["id"].value;
    data.vmid = this.testControllerForm.controls["vmid"].value;
    data.browser = this.testControllerForm.controls["browser"].value;
    data.exec = this.testControllerForm.controls["exec"].value;
    this.controllerservice.addController3(data);
    setTimeout(f=>{
      this.router.navigate(['/table-list']);
    },2200)
  }
}
