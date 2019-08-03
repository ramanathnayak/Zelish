import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZelishSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ZelishSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [ZelishSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZelishSharedModule {
  static forRoot() {
    return {
      ngModule: ZelishSharedModule
    };
  }
}
