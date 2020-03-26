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
  search: String;
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
  filter(): void{
    this.clearTab();
    if (this.search && this.search.trim()){
      this.activities = this.activities.filter((activity)=> {
        return (activity.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }
  }
}
