import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController3 } from '../../../../../core/models/feature/browser-controller/testcontroller3.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserController } from '../../../../../core';
import { FeatureService } from '../../../../../core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-browser-edit-controller',
  templateUrl: './edit-browser-controller.component.html',
  styleUrls: ['./edit-browser-controller.component.scss']
})
export class EditBrowserControllerComponent implements OnInit {
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
    this.getbrowserController(this.id);
    
  }

  getbrowserController(num:number) {
   this.controllerservice.getBrowserController(num)
   .subscribe((result)=>{
    this.editBControllerObj = result;
  },
   error =>{
     console.log(error.message);
   },
   ()=>{ })
  }
  
  onSubmit() {
    
    this.controllerservice.updateBrowserController(this.editBControllerObj.id,this.editBControllerObj);
    setTimeout(f=>{
      this.router.navigate(['/admin/feature']);
    },2200)
  }

}
