import { Component } from '@angular/core';

import { Activity } from '../models/activity';
import { ActiviService } from '../services/activi.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  activities: Activity[];  
  constructor(private ActiviService: ActiviService) {
    this.activities = this.ActiviService.getActivity();
  }

}
