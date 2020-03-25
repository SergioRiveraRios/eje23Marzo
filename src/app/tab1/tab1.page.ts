import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { ActiviService } from '../services/activi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activities: Activity[] = [];

  constructor(private activiService: ActiviService,private router: Router) {
    this.clearTab();
  }

  changeStatus(pos: number) {
    this.activiService.changeStatus(pos);
  }
  clearTab():void{
    this.activities = this.activiService.getActivity();
  }
  newActivity(): void {
    this.router.navigate(['/new-activity']);
  }
}
