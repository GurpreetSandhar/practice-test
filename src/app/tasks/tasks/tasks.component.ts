import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private dataService: DataService) {}
  tableResponse: any = this.dataService.tableData;
  selectedUserStory: any;
  selectedTableButton: string = 'TEST CASES';

  ngOnInit(): void {}

  selectedStory(event) {
    console.log('event', event);
    this.selectedUserStory = event;
  }

  selectedTablebtn(value) {
    this.selectedTableButton = value;
  }
}
