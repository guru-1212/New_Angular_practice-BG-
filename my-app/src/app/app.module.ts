import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpracticeComponent } from './bpractice/bpractice.component';
import { ToDoListComponent } from './bpractice/to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './bpractice/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BpracticeComponent,
    ToDoListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
