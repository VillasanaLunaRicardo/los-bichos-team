import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route,Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id='';
  constructor(private route:Router, private Ruta:ActivatedRoute) {

   }

   OnInit(){
     this.id=this.Ruta.snapshot.paramMap.get('id')+'';
   }
   Mostrarprod(){
     this.route.navigate([''])
   }
   mostrardescrip(){
    this.route.navigate([''])
   }
   carrito(){
    this.route.navigate([''])
   }
   inicioses(){
    this.route.navigate([''])
   }
   infotargeta(){
    this.route.navigate([''])
   }
   infoenvio(){
    this.route.navigate([''])
   }
   

  ngOnInit(): void {
  }

}
