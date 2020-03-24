import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { ActiviService } from '../services/activi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activities: Activity[] = [];

  constructor(private activiService: ActiviService) {
    this.activities = this.activiService.getActivity();
  }

  changeStatus(pos: number) {
    this.activiService.changeStatus(pos);
  }
}
