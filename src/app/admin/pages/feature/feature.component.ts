import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserController } from '../../../core/models/feature/browser-controller/browser-controller';
import { ModuleController } from '../../../core/models/feature/module-controller/module-controller';
import { TestController } from '../../../core/models/feature/test-controller/test-controller';
import { SelectItem } from 'primeng/api/selectitem';
import { TestControllerService } from '../../../services/testcontroller.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog/confirmation-dialog.service';
import { browserControllerColumns, testControllerColumns, moduleControllerColumns } from '../../../core/constants/feature';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatureComponent implements OnInit {

  browserController: BrowserController[];
  moduleController: ModuleController[];
  testController: TestController[];
  browserControllerCols: SelectItem[];
  testControllerCols: any[];
  moduleControllerCols: any[];
  selectedBrowserControllerCols: any[];
  selectedTestControllerCols: any[];
  selectedModuleControllerCols: any[];
  loading: boolean = true;

  // Cards
  constructor(private svc: TestControllerService, private router: Router,
    private confirmationDialogService: ConfirmationDialogService, private controllerservice: TestControllerService) { }

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
    this.selectedBrowserControllerCols = [];
    this.browserControllerCols.forEach(col => {
      this.selectedBrowserControllerCols.push(col.value);
    });
    // this.selectedBrowserControllerCols = this.selectedBrowserControllerCols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
  }

  LoadController2Cols() {
    this.selectedTestControllerCols = [];
    this.testControllerCols.forEach(col => {
      this.selectedTestControllerCols.push(col.value);
    });
    // this.selectedTestControllerCols = this.selectedTestControllerCols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
  }

  LoadController1Cols() {
    this.selectedModuleControllerCols = [];
    this.moduleControllerCols.forEach(col => {
      this.selectedModuleControllerCols.push(col.value);
    });
    // this.selectedModuleControllerCols = this.selectedModuleControllerCols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
  }

  ngOnInit() {
    var self = this;
    this.loading = false;
    this.getBrowserControllers();
    this.getModuleControllers();
    this.getTestControllers();
    this.browserControllerCols = browserControllerColumns;
    this.selectedModuleControllerCols = [];
    this.selectedTestControllerCols = [];
    this.selectedBrowserControllerCols = [];
    this.moduleControllerCols =  moduleControllerColumns;
    this.testControllerCols = testControllerColumns;
  }

  getBrowserControllers() {
    this.svc.getAllBrowserController()
      .subscribe((result: BrowserController[]) => {
        this.browserController = result;
        this.loading = false;
      },
        error => {
          this.browserController = [];
        },
        () => {
        })
  }

  getModuleControllers() {
    this.svc.getAllModuleController()
      .subscribe((result) => {
        console.log(result);
        this.moduleController = result;
      },
        error => {
          console.log(error.message);
        },
        () => {
        })
  }
  getTestControllers() {
    this.svc.getAllTestController()
      .subscribe((result) => {
        this.testController = result;
      },
        error => {
          console.log(error.message);
        },
        () => {
        })
  }

  deleteBrowserController(id: number) {
    if (this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteBrowserController(id);
      setTimeout(f => {
        this.getBrowserControllers();
      }, 2200)
    }
  }

  deleteController2(id: number) {
    if (this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController2(id);
      setTimeout(f => {
        this.getModuleControllers();
      }, 2200)
    }
  }
  deleteController1(id: number) {
    if (this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
      this.svc.deleteTestController1(id);
      setTimeout(f => {
        this.getTestControllers();
      }, 2200)
    }
  }

  addBrowserController(){
    this.controllerservice.addBrowserController(new BrowserController());
  }

  addModuleController(){
    this.controllerservice.addModuleController(new ModuleController());
  }

  addTestController(){
    this.controllerservice.addTestController(new TestController());
  }

  onRowEditController2(id: number) {
    this.router.navigate(['admin/feature/testcontroller2/edit', id]);
  }
  onRowEditController1(id: number) {
    this.router.navigate(['admin/feature/testcontroller1/edit', id]);
  }
  onRowEditBrowserController(id: number) {
    this.router.navigate(['admin/feature/testcontroller3/edit', id]);
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
