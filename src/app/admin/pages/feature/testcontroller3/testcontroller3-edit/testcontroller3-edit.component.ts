import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController3 } from '../../../../../models/testcontroller3.model';
import { TestControllerService } from '../../../../../services/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserController } from '../../../../../core';

@Component({
  selector: 'app-testcontroller3-edit',
  templateUrl: './testcontroller3-edit.component.html',
  styleUrls: ['./testcontroller3-edit.component.scss']
})
export class Testcontroller3EditComponent implements OnInit {
  id:number;
  testController3:TestController3;
  editBControllerObj: BrowserController;
  testControllerForm = new FormGroup({
    id: new FormControl(''),
    vmid: new FormControl(''),
    browser: new FormControl('', Validators.required),
    exec: new FormControl('', Validators.required),
    isLocked: new FormControl(''),
    createdOn: new FormControl(''),
    updatedOn: new FormControl('')
  });
  constructor(private route:ActivatedRoute, private controllerservice:TestControllerService,private router: Router) { 
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.getbrowserController(this.id);
  }

  getbrowserController(num:number) {
   this.controllerservice.getBrowserController(num)
   .subscribe((result)=>{
    console.log(result);
    this.editBControllerObj = result;
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
    data.isLocked = this.testControllerForm.controls["isLocked"].value;
    
    this.controllerservice.updateTestController3(data.id,data);
    setTimeout(f=>{
      this.router.navigate(['/admin/feature']);
    },2200)
  }

}
