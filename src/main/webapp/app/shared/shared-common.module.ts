import { NgModule } from '@angular/core';

import { Casoin2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Casoin2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Casoin2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Casoin2SharedCommonModule {}
