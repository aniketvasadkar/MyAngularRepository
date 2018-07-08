import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {routes} from './app.route';

import { AppComponent } from './app.component';
import { StructuralComponent } from './structural/structural.component';
import { RepeatDirective } from './repeat.directive';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { LoginComponent } from './login/login.component';
import { JavaComponent } from './java/java.component';
import { AndroidComponent } from './android/android.component';
import { Androidchild1Component } from './androidchild1/androidchild1.component';
import { Androidchild2Component } from './androidchild2/androidchild2.component';
import { AndroidIdeComponent } from './android-ide/android-ide.component';
import { employeeService } from './employee.service';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    RepeatDirective,
    TwowaybindingComponent,
    LoginComponent,
    JavaComponent,
    AndroidComponent,
    Androidchild1Component,
    Androidchild2Component,
    AndroidIdeComponent,
    ServiceDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [employeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
