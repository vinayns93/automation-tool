import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController3 } from '../../../models/testcontroller3.model';
import { TestControllerService } from '../../../services/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testcontroller3-edit',
  templateUrl: './testcontroller3-edit.component.html',
  styleUrls: ['./testcontroller3-edit.component.scss']
})
export class Testcontroller3EditComponent implements OnInit {
  id:number;
  testController3:TestController3;
  testControllerForm = new FormGroup({
    id: new FormControl(''),
    vmid: new FormControl('', Validators.required),
    browser: new FormControl('', Validators.required),
    exec: new FormControl('', Validators.required)
  });
  constructor(private route:ActivatedRoute, private controllerservice:TestControllerService,private router: Router) { 
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getTestController3byId(this.id);
  }

  getTestController3byId(num:number) {
   this.controllerservice.getController3(num)
   .subscribe((result)=>{
    console.log(result);
    this.testController3 = result;
    this.populateFormFields();
  },
   error =>{
     console.log(error.message);
   },
   ()=>{
     console.log(this.testController3);
   })
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
    
    this.controllerservice.updateTestController3(data.id,data);
    setTimeout(f=>{
      this.router.navigate(['/table-list']);
    },2200)
  }

}
