import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BrowserController } from '../../../core/models/feature/browser-controller/browser-controller';
import { ModuleController } from '../../../core/models/feature/module-controller/module-controller';
import { TestController } from '../../../core/models/feature/test-controller/test-controller';
import { SelectItem } from 'primeng/api/selectitem';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog/confirmation-dialog.service';
import { browserControllerColumns, testControllerColumns, moduleControllerColumns } from '../../../core/constants/feature';
import { formatDate } from '@angular/common';
import { FeatureService, GlobalService } from '../../../core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatureComponent implements OnInit {

  browserController: BrowserController[];
  deletedBrowserController: BrowserController[];
  moduleController: ModuleController[];
  deletedModuleController: ModuleController[];
  testController: TestController[];
  deletedTestController: TestController[];
  browserControllerCols: SelectItem[];
  testControllerCols: any[];
  moduleControllerCols: any[];
  selectedBrowserControllerCols: any[];
  selectedTestControllerCols: any[];
  selectedModuleControllerCols: any[];
  loading: boolean = true;

  @ViewChild(Table, { static : false}) tt: Table;
  @ViewChild(Table, { static : false}) bt: Table;
  @ViewChild(Table, { static : false}) mt: Table;

  // Cards
  constructor(private router: Router,
    private confirmationDialogService: ConfirmationDialogService, 
    private controllerservice: FeatureService, private globalService: GlobalService) { }

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
    this.moduleControllerCols =  moduleControllerColumns;
    this.testControllerCols = testControllerColumns;
    this.LoadAllBrowserControllerColumns();
    this.LoadAllModuleControllerColumns();
    this.LoadAllTestControllerColumns();
    this.globalService.SetCurrentTab('FEATURE');
  }

  LoadAllTestControllerColumns() {
    this.selectedTestControllerCols = [];
    testControllerColumns.forEach(column => {
      this.selectedTestControllerCols.push(column.value);
    });
  }

  LoadAllModuleControllerColumns() {
    this.selectedModuleControllerCols = [];
    moduleControllerColumns.forEach(column => {
      this.selectedModuleControllerCols.push(column.value);
    });
  }
  LoadAllBrowserControllerColumns() {
    this.selectedBrowserControllerCols = [];
    browserControllerColumns.forEach(column => {
      this.selectedBrowserControllerCols.push(column.value);
    });
  }

  getBrowserControllers() {
    this.controllerservice.getAllBrowserController()
      .subscribe((result: BrowserController[]) => {
        this.browserController = [];
        this.deletedBrowserController = [];
        if(result.length > 0){
          result.filter(browserItem => {
            browserItem.statusID == 0 ? this.browserController.push(browserItem) 
              : this.deletedBrowserController.push(browserItem) ;
          });
        }
        this.loading = false;
      },
        error => {
          this.browserController = [];
        },
        () => {
        })
  }

  getModuleControllers() {
    this.controllerservice.getAllModuleController()
      .subscribe((result) => {
        this.moduleController = [];
        this.deletedModuleController = [];
        if(result.length > 0){
          result.filter(browserItem => {
            browserItem.statusID == 0 ? this.moduleController.push(browserItem) 
              : this.deletedModuleController.push(browserItem) ;
          });
        }
      },
        error => {
          console.log(error.message);
        },
        () => {
        })
  }
  getTestControllers() {
    this.controllerservice.getAllTestController()
      .subscribe((result) => {
        this.testController = [];
        this.deletedTestController = [];
        if(result.length > 0){
          result.filter(browserItem => {
            browserItem.statusID == 0 ? this.testController.push(browserItem) 
              : this.deletedTestController.push(browserItem) ;
          });
        }
      },
        error => {
          console.log(error.message);
        },
        () => {
        })
  }

  deleteBrowserController(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.controllerservice.deleteBrowserController(id);
      setTimeout(f => {
        this.getBrowserControllers();
      }, 2200)
    }
  }

  deleteTestController(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.controllerservice.deleteTestController(id);
      setTimeout(f => {
        this.getModuleControllers();
      }, 2200)
    }
  }
  deleteModuleController(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.controllerservice.deleteModuleController(id);
      setTimeout(f => {
        this.getTestControllers();
      }, 2200)
    }
  }

  // addBrowserController(){
  //   this.controllerservice.addBrowserController(new BrowserController());
  //   this.getBrowserControllers();
  // }

  // addModuleController(){
  //   this.controllerservice.addModuleController(new ModuleController());
  //   this.getModuleControllers();
  // }

  // addTestController(){
  //   this.controllerservice.addTestController(new TestController());
  //   this.getTestControllers();
  // }

  onRowEditModuleController(id: number) {
    this.router.navigate(['admin/feature/testcontroller1/edit/', id]);
  }
  onRowEditTestController(id: number) {
    this.router.navigate(['admin/feature/testcontroller2/edit/', id]);
  }
  onRowEditBrowserController(id: number) {
    this.router.navigate(['admin/feature/testcontroller3/edit/', id]);
  }

  public chartClicked(e: any): void {
    
  }

  public chartHovered(e: any): void {
    
  }
}
