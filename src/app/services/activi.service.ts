import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
@Injectable({
  providedIn:  'root'
})
export class ActiviService {
  private activity: Activity[] = new Array();

  constructor() { 
    this.activity.push({
      name: 'Compras de Mercado',
      date:'23 Marzo 2020',
      status: true,
      detail:"Compra del 1 paquete de papel higienico"
    });
    this.activity.push({
      name: 'Sacar la basura',
      date:'23 Marzo 2020',
      status: true,
      detail:"Este día le toca a mi hermano"
    });
    this.activity.push({
      name: 'Limpiar Baño',
      date:'23 Marzo 2020',
      status: true,
      detail:"Comprar cloro para realizarlo"
    });
    this.activity.push({
      name: 'Limpiar Cuarto',
      date:'23 Marzo 2020',
      status: true,
      detail:"Recoger ropa de lavanderia, doblarla y limpiar cuarto"
    });
    this.activity.push({
      name: 'Salir con pareja',
      date:'23 Marzo 2020',
      status: true,
      detail:"Hoy se tiene que salir a cenar"
    });
  }
  changeStatus(position: number) {
      this.activity[position].status = !this.activity[position].status;
  }
  getActivity(): Activity[] {
    return this.activity;
  }
}
