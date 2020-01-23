import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from './services';
import { AuthService } from './services/auth/auth.service';
import { FeatureService } from './services/feature-service/feature-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GlobalService,
    AuthService,
    FeatureService
    // {
    //   provide: ErrorStateMatcher,
    //   useClass: ShowOnDirtyErrorStateMatcher
    // }
  ]
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() core: CoreModule){
      if(core){
        throw new Error("Only import in Root Module");
      }
  }

}
