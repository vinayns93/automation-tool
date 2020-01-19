import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from './services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GlobalService
  ]
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() core: CoreModule){
      if(core){
        throw new Error("Only import in Root Module");
      }
  }

}
