import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import { PickerModule } from '@ctrl/ngx-emoji-mart'

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  providers: [NgbPopoverConfig] 
})
export class TasklistComponent implements OnInit {

  constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'bottom';
    config.triggers = 'click';
     
  }

  ngOnInit(): void {




  }

}
