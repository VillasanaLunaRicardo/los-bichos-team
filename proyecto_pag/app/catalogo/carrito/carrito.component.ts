import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  id='';
  constructor(private route:Router, private Ruta:ActivatedRoute) {
   }
   OnInit(){
     this.id=this.Ruta.snapshot.paramMap.get('id')+'';
   }
   Mostrarprod(){
     this.route.navigate(['catalogo/producto'])
   }
   mostrardescrip(){
    this.route.navigate(['catalogo/datalle-prod'])
   }
   carrito(){
    this.route.navigate(['catalogo/carrito'])
   }
   iniciosesesion(){
    this.route.navigate(['catalogo/inicio-ses'])
   }
   infotargeta(){
    this.route.navigate(['catalogo/inf-targeta'])
   }
   infoenvio(){
    this.route.navigate(['catalogo/inf-envio'])
   }

  ngOnInit(): void {
  }

}
