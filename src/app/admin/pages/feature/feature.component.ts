import { Component, OnInit } from '@angular/core';
import { TestController3 } from '../../../models/testcontroller3.model';
import { TestController1 } from '../../../models/testcontroller1.model';
import { TestController2 } from '../../../models/testcontroller2.model';
import { SelectItem } from 'primeng/api/selectitem';
import { TestControllerService } from '../../../services/testcontroller.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog/confirmation-dialog.service';
import { browserControllerColumns, testControllerColumns, moduleControllerColumns } from '../../../core/constants/feature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  testControllers3: TestController3[];
  testControllers1: TestController1[];
  testControllers2: TestController2[];
  controller3Cols: SelectItem[];
  controller2Cols: any[];
  controller1Cols: any[];
  selectedController3Cols: any[];
  selectedController2Cols: any[];
  selectedController1Cols: any[];
  loading: boolean = true;

  // Cards
  constructor(private svc: TestControllerService, private router: Router,
    private confirmationDialogService: ConfirmationDialogService) { }

  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  LoadController3Cols() {
    this.selectedController3Cols = [];
    this.controller3Cols.forEach(col => {
      this.selectedController3Cols.push(col.value);
    });
    // this.selectedController3Cols = this.selectedController3Cols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
  }

  LoadController2Cols() {
    this.selectedController2Cols = [];
    this.controller2Cols.forEach(col => {
      this.selectedController2Cols.push(col.value);
    });
    // this.selectedController2Cols = this.selectedController2Cols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
  }

  LoadController1Cols() {
    this.selectedController1Cols = [];
    this.controller1Cols.forEach(col => {
      this.selectedController1Cols.push(col.value);
    });
    // this.selectedController1Cols = this.selectedController1Cols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
  }

  ngOnInit() {
    var self = this;
    this.loading = false;
    this.getControllers();
    this.getControllers1();
    this.getControllers2();
    this.controller3Cols = browserControllerColumns;
    
    this.LoadController3Cols();
    this.controller1Cols =  moduleControllerColumns;

    this.LoadController1Cols();
    this.controller2Cols = testControllerColumns;
    this.LoadController2Cols();
  }

  getControllers() {
    this.svc.getAllBrowserController()
      .subscribe((result) => {
        this.testControllers3 = result;
        this.loading = false;
      },
        error => {
          this.testControllers3 = [];
        },
        () => {
        })
  }

  getControllers1() {
    this.svc.getAllModuleController(0)
      .subscribe((result) => {
        console.log(result);
        this.testControllers1 = result;
      },
        error => {
          console.log(error.message);
        },
        () => {
        })
  }
  getControllers2() {
    this.svc.getAllTestController(0)
      .subscribe((result) => {
        this.testControllers2 = result;

      },
        error => {
          console.log(error.message);
        },
        () => {
        })
  }

  deleteController3(id: number) {
    if (this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController3(id);
      setTimeout(f => {
        this.getControllers();
      }, 2200)
    }
  }

  deleteController2(id: number) {
    if (this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController2(id);
      setTimeout(f => {
        this.getControllers();
      }, 2200)
    }
  }
  deleteController1(id: number) {
    if (this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController1(id);
      setTimeout(f => {
        this.getControllers();
      }, 2200)
    }
  }

  onRowEditController2(id: number) {
    this.router.navigate(['/table-list/testcontroller2/edit', id]);
  }
  onRowEditController1(id: number) {
    this.router.navigate(['/table-list/testcontroller1/edit', id]);
  }
  onRowEditController3(id: number) {
    this.router.navigate(['/table-list/testcontroller3/edit', id]);
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
