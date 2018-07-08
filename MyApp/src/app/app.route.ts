import { Routes } from '@angular/router';
import { JavaComponent } from './java/java.component';
import { AndroidComponent } from './android/android.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StructuralComponent } from './structural/structural.component';
import { Androidchild1Component } from './androidchild1/androidchild1.component';
import { Androidchild2Component } from './androidchild2/androidchild2.component';
import { AndroidIdeComponent } from './android-ide/android-ide.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { LoginComponent } from './login/login.component';

export const routes : Routes = [
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'java', component:JavaComponent},
{path:'android', component:AndroidComponent,
children :[
    {path:'androidChild1', component:Androidchild1Component},
    {path:'androidChild2', component:Androidchild2Component},
    {path:'type/:ideSelected', component:AndroidIdeComponent}
]
},
{path:'twowaybinding', component:TwowaybindingComponent},
{path:'structural', component:StructuralComponent},
{path:'serviceDemo', component:ServiceDemoComponent}

]
