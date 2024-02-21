import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations:[
        AppComponent,
        EmployeeListComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClient
    ],
    providers:[HttpClientModule,HttpClient],
    bootstrap:[AppComponent]
})

export class AppModule {}