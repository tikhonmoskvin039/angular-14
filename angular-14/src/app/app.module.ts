import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FocusDirective } from './directives/focus.directive';
import { CreateProductComponent } from './components/create-product/create-product.component'
import { ModalComponent } from './components/modal/modal.component'
import { FilterProductsPipe } from './pipes/filter-products.pipe'
import { GlobalErrorComponent } from './components/global-error/global-error.component'
import { ProductComponent } from './components/product/product.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ], // ! импортируем модуль HttpClient для работы с сервером
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// ! импортируем модуль FormsModule для работы с двутронним байндингом инпута
