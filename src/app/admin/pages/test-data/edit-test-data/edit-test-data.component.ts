import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TestData, TestDataService } from "../../../../core";

@Component({
  selector: "app-edit-test-data",
  templateUrl: "./edit-test-data.component.html",
  styleUrls: ["./edit-test-data.component.scss"]
})
export class EditTestDataComponent implements OnInit {
  editTestDataObj: TestData = new TestData();
  id: any;
  runValues: any;
  tcid: any;
  tcids: any[];
  filteredTcids: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private testDataService: TestDataService
  ) {
    this.id = activatedRoute.snapshot.paramMap.get("id");
  }

  testDataForm = new FormGroup({
    module: new FormControl(""),
    tcid: new FormControl(""),
    iterations: new FormControl(""),
    envDetail_1: new FormControl(""),
    envDetail_2: new FormControl(""),
    param1: new FormControl(""),
    param2: new FormControl(""),
    param3: new FormControl(""),
    param4: new FormControl(""),
    param5: new FormControl(""),
    param6: new FormControl(""),
    param7: new FormControl(""),
    param8: new FormControl(""),
    param9: new FormControl(""),
    param10: new FormControl(""),
    param11: new FormControl(""),
    param12: new FormControl(""),
    param13: new FormControl(""),
    param14: new FormControl(""),
    param15: new FormControl(""),
    param16: new FormControl(""),
    param17: new FormControl(""),
    param18: new FormControl(""),
    param19: new FormControl(""),
    param20: new FormControl(""),
    param21: new FormControl(""),
    param22: new FormControl(""),
    param23: new FormControl(""),
    param24: new FormControl(""),
    param25: new FormControl(""),
    param26: new FormControl(""),
    param27: new FormControl(""),
    param28: new FormControl(""),
    param29: new FormControl(""),
    param30: new FormControl(""),
    param31: new FormControl(""),
    param32: new FormControl(""),
    param33: new FormControl(""),
    param34: new FormControl(""),
    param35: new FormControl(""),
    param36: new FormControl(""),
    param37: new FormControl(""),
    param38: new FormControl(""),
    param39: new FormControl(""),
    param40: new FormControl(""),
    param41: new FormControl(""),
    param42: new FormControl(""),
    param43: new FormControl(""),
    param44: new FormControl(""),
    param45: new FormControl(""),
    param46: new FormControl(""),
    param47: new FormControl(""),
    param48: new FormControl(""),
    param49: new FormControl(""),
    param50: new FormControl(""),
    param51: new FormControl(""),
    param52: new FormControl(""),
    param53: new FormControl(""),
    param54: new FormControl(""),
    param55: new FormControl(""),
    param56: new FormControl(""),
    param57: new FormControl(""),
    param58: new FormControl(""),
    param59: new FormControl(""),
    param60: new FormControl(""),
    param61: new FormControl(""),
    param62: new FormControl(""),
    param63: new FormControl(""),
    param64: new FormControl(""),
    param65: new FormControl(""),
    param66: new FormControl(""),
    param67: new FormControl(""),
    param68: new FormControl(""),
    param69: new FormControl(""),
    param70: new FormControl(""),
    param71: new FormControl(""),
    param72: new FormControl(""),
    param73: new FormControl(""),
    param74: new FormControl(""),
    param75: new FormControl(""),
    param76: new FormControl(""),
    param77: new FormControl(""),
    param78: new FormControl(""),
    param79: new FormControl(""),
    param80: new FormControl(""),
    param81: new FormControl(""),
    param82: new FormControl(""),
    param83: new FormControl(""),
    param84: new FormControl(""),
    param85: new FormControl(""),
    param86: new FormControl(""),
    param87: new FormControl(""),
    param88: new FormControl(""),
    param89: new FormControl(""),
    param90: new FormControl(""),
    param91: new FormControl(""),
    param92: new FormControl(""),
    param93: new FormControl(""),
    param94: new FormControl(""),
    param95: new FormControl(""),
    param96: new FormControl(""),
    param97: new FormControl(""),
    param98: new FormControl(""),
    param99: new FormControl(""),
    param100: new FormControl(""),
    param101: new FormControl(""),
    param102: new FormControl(""),
    param103: new FormControl(""),
    param104: new FormControl(""),
    param105: new FormControl(""),
    param106: new FormControl(""),
    param107: new FormControl(""),
    param108: new FormControl(""),
    param109: new FormControl(""),
    param110: new FormControl(""),
    param111: new FormControl(""),
    param112: new FormControl(""),
    param113: new FormControl(""),
    param114: new FormControl(""),
    param115: new FormControl(""),
    param116: new FormControl(""),
    param117: new FormControl(""),
    param118: new FormControl(""),
    param119: new FormControl(""),
    param120: new FormControl(""),
    param121: new FormControl(""),
    param122: new FormControl(""),
    param123: new FormControl(""),
    param124: new FormControl(""),
    param125: new FormControl(""),
    param126: new FormControl(""),
    param127: new FormControl(""),
    param128: new FormControl(""),
    param129: new FormControl(""),
    param130: new FormControl(""),
    param131: new FormControl(""),
    param132: new FormControl(""),
    param133: new FormControl(""),
    param134: new FormControl(""),
    param135: new FormControl(""),
    param136: new FormControl(""),
    param137: new FormControl(""),
    param138: new FormControl(""),
    param139: new FormControl(""),
    param140: new FormControl(""),
    param141: new FormControl(""),
    param142: new FormControl(""),
    param143: new FormControl(""),
    param144: new FormControl(""),
    param145: new FormControl(""),
    param146: new FormControl(""),
    param147: new FormControl(""),
    param148: new FormControl(""),
    param149: new FormControl(""),
    param150: new FormControl(""),
    param151: new FormControl(""),
    param152: new FormControl(""),
    param153: new FormControl(""),
    param154: new FormControl(""),
    param155: new FormControl(""),
    param156: new FormControl(""),
    param157: new FormControl(""),
    param158: new FormControl(""),
    param159: new FormControl(""),
    param160: new FormControl(""),
    param161: new FormControl(""),
    param162: new FormControl(""),
    param163: new FormControl(""),
    param164: new FormControl(""),
    param165: new FormControl(""),
    param166: new FormControl(""),
    param167: new FormControl(""),
    param168: new FormControl(""),
    param169: new FormControl(""),
    param170: new FormControl(""),
    param171: new FormControl(""),
    param172: new FormControl(""),
    param173: new FormControl(""),
    param174: new FormControl(""),
    param175: new FormControl(""),
    param176: new FormControl(""),
    param177: new FormControl(""),
    param178: new FormControl(""),
    param179: new FormControl(""),
    param180: new FormControl(""),
    param181: new FormControl(""),
    param182: new FormControl(""),
    param183: new FormControl(""),
    param184: new FormControl(""),
    param185: new FormControl(""),
    param186: new FormControl(""),
    param187: new FormControl(""),
    param188: new FormControl(""),
    param189: new FormControl(""),
    param190: new FormControl(""),
    param191: new FormControl(""),
    param192: new FormControl(""),
    param193: new FormControl(""),
    param194: new FormControl(""),
    param195: new FormControl(""),
    param196: new FormControl(""),
    param197: new FormControl(""),
    param198: new FormControl(""),
    param199: new FormControl(""),
    param200: new FormControl(""),
    param201: new FormControl(""),
    param202: new FormControl(""),
    param203: new FormControl(""),
    param204: new FormControl(""),
    param205: new FormControl(""),
    param206: new FormControl(""),
    param207: new FormControl(""),
    param208: new FormControl(""),
    param209: new FormControl(""),
    param210: new FormControl(""),
    param211: new FormControl(""),
    param212: new FormControl(""),
    param213: new FormControl(""),
    param214: new FormControl(""),
    param215: new FormControl(""),
    param216: new FormControl(""),
    param217: new FormControl(""),
    param218: new FormControl(""),
    param219: new FormControl(""),
    param220: new FormControl(""),
    param221: new FormControl(""),
    param222: new FormControl(""),
    param223: new FormControl(""),
    param224: new FormControl(""),
    param225: new FormControl(""),
    param226: new FormControl(""),
    param227: new FormControl(""),
    param228: new FormControl(""),
    param229: new FormControl(""),
    param230: new FormControl(""),
    param231: new FormControl(""),
    param232: new FormControl(""),
    param233: new FormControl(""),
    param234: new FormControl(""),
    param235: new FormControl(""),
    param236: new FormControl(""),
    param237: new FormControl(""),
    param238: new FormControl(""),
    param239: new FormControl(""),
    param240: new FormControl(""),
    param241: new FormControl(""),
    param242: new FormControl(""),
    param243: new FormControl(""),
    param244: new FormControl(""),
    param245: new FormControl(""),
    param246: new FormControl(""),
    param247: new FormControl(""),
    param248: new FormControl(""),
    param249: new FormControl(""),
    param250: new FormControl("")
  });
  ngOnInit() {
    let getTestData = this.testDataService.getTestData(this.id).subscribe(
      (result: TestData) => {
        this.editTestDataObj = result;
        getTestData.unsubscribe();
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }
  filterTcids(event) {
    let query = event.query;
    this.testDataService.getAllTcid().subscribe(
      (tcids: any[]) => {
        this.filteredTcids = this.filterTcid(query, tcids);
      },
      error => {
        console.log(error.message);
      },
      () => {}
    );
  }

  filterTcid(query, tcids: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < tcids.length; i++) {
      let tcid = tcids[i];
      if (tcid.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(tcid);
      }
    }
    return filtered;
  }

  onSubmit() {
    this.testDataService.updateTestData(
      this.editTestDataObj.id,
      this.editTestDataObj
    );
    setTimeout(f => {
      this.router.navigate(["/admin/testdata"]);
    }, 2200);
  }
}
