import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './catalogo/navbar/navbar.component';
import { FooterComponent } from './catalogo/footer/footer.component';
import { CatalogoModule } from './catalogo/catalogo.module';
import { BannerComponent } from './catalogo/banner/banner.component';
import { ProductoComponent } from './catalogo/producto/producto.component';
import { DatalleProdComponent } from './catalogo/datalle-prod/datalle-prod.component';
import { CarritoComponent } from './catalogo/carrito/carrito.component';
import { InfTargetaComponent } from './catalogo/inf-targeta/inf-targeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    FooterComponent,
    BannerComponent, 
    ProductoComponent,
    DatalleProdComponent, 
    CarritoComponent,
    InfTargetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
