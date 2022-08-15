import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FotterComponent} from './fotter/fotter.component';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from './customer/create/create.component';
import {IndexComponent} from './customer/index/index.component';
import {ListComponent} from './contract/list/list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: IndexComponent},
  {path: 'customer/create', component: CreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotterComponent,
    HomeComponent,
    CreateComponent,
    IndexComponent,
    ListComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
