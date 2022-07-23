import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  activeUrl:string;
  public sidebarShow: boolean = false;
  constructor(private router: Router) { 
    this.router.events.subscribe(res=>{
      this.activeUrl = res['url'];
    })
  }

  ngOnInit(): void {
  }

  open() {
    this.sidebarShow = !this.sidebarShow;
  }

}
