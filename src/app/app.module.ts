import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './modules/core/register-page/register-page.component';
import { ProductsPageComponent } from './modules/core/products-page/products-page.component';
import { PhoneValidatorDirective } from './modules/core/register-page/phone-validator.directive';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AppComponent,
    RegisterPageComponent,
    ProductsPageComponent,
    PhoneValidatorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
