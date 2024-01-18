import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  DropdownComponent,
  PlaceholderAnimationDirective,
  PlaceholderDirective,
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { EmployersComponent } from './employers.component';
import { EmployersRoutingModule } from './employers-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [EmployersComponent],
  imports: [
    
    EmployersRoutingModule,
    TableModule,
    CardModule,
    NavModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    IconModule,
    DocsComponentsModule,
    PlaceholderAnimationDirective,
    PlaceholderDirective,	
  ]
})
export class EmployersModule {
}