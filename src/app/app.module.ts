import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MultilineDirective } from './directives/multiline.directive';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ObjectValuesPipe } from './pipes/object-values.pipe';
import { IsTruePipe } from './pipes/is-true.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductComponent,
    MainPageComponent,
    MultilineDirective,
    CartPageComponent,
    ObjectValuesPipe,
    IsTruePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
