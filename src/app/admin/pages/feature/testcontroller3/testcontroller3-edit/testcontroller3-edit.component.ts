import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController3 } from '../../../../../core/models/feature/browser-controller/testcontroller3.model';
import { TestControllerService } from '../../../../../core/services/feature-service/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserController } from '../../../../../core';
import { FeatureService } from '../../../../../core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-testcontroller3-edit',
  templateUrl: './testcontroller3-edit.component.html',
  styleUrls: ['./testcontroller3-edit.component.scss']
})
export class Testcontroller3EditComponent implements OnInit {
  id:number;
  testController3:TestController3;
  editBControllerObj: BrowserController = new BrowserController();
  testControllerForm = new FormGroup({
    id: new FormControl(''),
    vmid: new FormControl(''),
    browser: new FormControl('', Validators.required),
    exec: new FormControl('', Validators.required),
    isLocked: new FormControl(''),
    createdOn: new FormControl(''),
    updatedOn: new FormControl('')
  });
  constructor(private route:ActivatedRoute, private controllerservice:FeatureService,private router: Router) { 
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
    // this.populateFormFields();
  },
   error =>{
     console.log(error.message);
   },
   ()=>{
     console.log(this.editBControllerObj);
   })
  }

  //  populateFormFields() {
  //   if (this.testControllerForm) {
  //     this.testControllerForm.reset();
  //   }
  //   this.testControllerForm.patchValue({
  //     id: this.editBControllerObj.id,
  //     vmid: this.editBControllerObj.vmid,
  //     browser: this.editBControllerObj.browser,
  //     exec: this.editBControllerObj.exec
  //   });
  //  }
  
  onSubmit() {
    // let data = new BrowserController();
    // data.id = this.testControllerForm.controls["id"].value;
    // data.vmid = this.testControllerForm.controls["vmid"].value;
    // data.browser = this.testControllerForm.controls["browser"].value;
    // data.exec = this.testControllerForm.controls["exec"].value;
    // data.isLocked = this.testControllerForm.controls["isLocked"].value;
    // data.updatedOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    
    this.controllerservice.updateBrowserController(this.editBControllerObj.id,this.editBControllerObj);
    setTimeout(f=>{
      this.router.navigate(['/admin/feature']);
    },2200)
  }

}
