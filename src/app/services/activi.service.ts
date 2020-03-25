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
  }
  changeStatus(position: number) {
      this.activity[position].status = !this.activity[position].status;
  }
  getActivity(): Activity[] {
    return this.activity;
  }
  newActivity(activity: Activity): void {
    this.activity.push(activity);
  }
}
