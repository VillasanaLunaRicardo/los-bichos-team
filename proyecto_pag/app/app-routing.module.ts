import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './catalogo/navbar/navbar.component';
import { BannerComponent } from './catalogo/banner/banner.component';
import { CarritoComponent } from './catalogo/carrito/carrito.component'; 
import { DatalleProdComponent } from './catalogo/datalle-prod/datalle-prod.component';
import { FooterComponent } from './catalogo/footer/footer.component';
import { InfEnvioComponent } from './catalogo/inf-envio/inf-envio.component';
import { InfTargetaComponent } from './catalogo/inf-targeta/inf-targeta.component';
import { InicioSesComponent } from './catalogo/inicio-ses/inicio-ses.component';
import { ProductoComponent } from './catalogo/producto/producto.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
 

  {path:'catalogo',
  loadChildren:()=>import("./catalogo/catalogo.module").then((m)=>m.CatalogoModule)},

  {path:'banner',component:BannerComponent},
  {path:'datalle-prod',component:DatalleProdComponent},
  {path:'carrito',component:CarritoComponent},
  {path:'footer',component:FooterComponent},
  {path:'inf-envio',component:InfEnvioComponent},
  {path:'inicio-ses',component:InicioSesComponent},
  {path:'inf-targeta',component:InfTargetaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
