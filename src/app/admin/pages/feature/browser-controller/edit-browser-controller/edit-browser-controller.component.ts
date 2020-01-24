import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserController } from '../../../../../core';
import { FeatureService } from '../../../../../core';
@Component({
  selector: 'app-browser-edit-controller',
  templateUrl: './edit-browser-controller.component.html',
  styleUrls: ['./edit-browser-controller.component.scss']
})
export class EditBrowserControllerComponent implements OnInit {
  id: number;
  editBControllerObj: BrowserController = new BrowserController();
  execValues : any;
  
  browserControllerForm = new FormGroup({
    id: new FormControl(''),
    vmid: new FormControl(''),
    browser: new FormControl('', Validators.required),
    createdOn: new FormControl(''),
    updatedOn: new FormControl(''),
    exec: new FormControl('', Validators.required),
  });
  constructor(private route: ActivatedRoute, private controllerservice: FeatureService, private router: Router) {
  }

  ngOnInit() {
    this.execValues = [
      { label: 'Y', value: 'Y' },
      { label: 'N' , value: 'N'}
    ];  
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getbrowserController(this.id);

  }

  getbrowserController(num: number) {
    this.controllerservice.getBrowserController(num)
      .subscribe((result) => {
        this.editBControllerObj = result;
      },
        error => {
          console.log(error.message);
        },
        () => { })
  }

  onSubmit() {
    this.controllerservice.updateBrowserController(this.editBControllerObj.id, this.editBControllerObj);
    setTimeout(f => {
      this.router.navigate(['/admin/feature']);
    }, 2200)
  }

}
