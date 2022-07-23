import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-stories-list',
  templateUrl: './user-stories-list.component.html',
  styleUrls: ['./user-stories-list.component.scss'],
})
export class UserStoriesListComponent implements OnInit {
  @Output() selectedStory = new EventEmitter();
  userListData = this.dataService.userStoriesListData;
  activeList: any;
  searchedValue: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('userListData', this.userListData);
    this.selectedList(this.userListData[0]);
  }

  selectedStatusBtn(status: string) {
    switch (status) {
      case 'Review':
        return { review_btn: true };
      case 'Dev Done':
        return { dev_done_btn: true };
      case 'Done':
        return { done_btn: true };
    }
  }

  selectedList(list) {
    this.activeList = list.id;
    this.selectedStory.emit(list);
  }
}
