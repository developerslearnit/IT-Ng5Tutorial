import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubService } from './Github.service';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveformsampleComponent } from './reactiveformsample/reactiveformsample.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    RegistrationComponent,
    ReactiveformsampleComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
