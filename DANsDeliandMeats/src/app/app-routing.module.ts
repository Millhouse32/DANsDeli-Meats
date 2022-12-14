import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path:'',redirectTo:'home', pathMatch: 'full'  },
  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'admin', component:AdminComponent },
  { path:'search', component:SearchComponent },
  { path:'cart', component:CartComponent },
  { path:'signup', component:SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
