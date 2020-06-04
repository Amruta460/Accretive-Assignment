import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PickerModule } from '@ctrl/ngx-emoji-mart'
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    EmojiModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    NgbModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
