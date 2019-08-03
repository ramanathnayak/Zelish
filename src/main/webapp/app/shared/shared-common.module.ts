import { NgModule } from '@angular/core';

import { ZelishSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ZelishSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ZelishSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZelishSharedCommonModule {}
