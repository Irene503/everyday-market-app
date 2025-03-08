import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './modules/core/register-page/register-page.component';
import { ProductsPageComponent } from './modules/core/products-page/products-page.component';

const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
