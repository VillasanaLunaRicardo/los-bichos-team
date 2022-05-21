import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { CarritoComponent } from '../carrito/carrito.component';
import { DatalleProdComponent } from '../datalle-prod/datalle-prod.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule,Routes } from '@angular/router';
import { InfEnvioComponent } from '../inf-envio/inf-envio.component';
import { InicioSesComponent } from '../inicio-ses/inicio-ses.component';
import { InfTargetaComponent } from '../inf-targeta/inf-targeta.component';
import { NavbarComponent } from '../navbar/navbar.component';

const routes:Routes=[
  {path:'',children:[
    {path:'navbar',component:NavbarComponent},
    {path:'banner',component:BannerComponent},
    {path:'datalle-prod',component:DatalleProdComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'footer',component:FooterComponent},
    {path:'inf-envio',component:InfEnvioComponent},
    {path:'inicio-ses',component:InicioSesComponent},
    {path:'inf-targeta',component:InfTargetaComponent},
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CatalogoRoutingModule { }
