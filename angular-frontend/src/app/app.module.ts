import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        AppComponent,
        EmployeeListComponent,
        CreateEmployeeComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClient,
        FormsModule,
        RouterModule
    ],
    providers:[HttpClientModule,HttpClient],
    bootstrap:[AppComponent]
})

export class AppModule {}