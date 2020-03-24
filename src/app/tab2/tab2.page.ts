import { Component } from '@angular/core';

import { Activity } from '../models/activity';
import { ActiviService } from '../services/activi.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  activities: Activity[];  
  constructor(private ActiviService: ActiviService) {
    this.activities = this.ActiviService.getActivity();
  }

}
