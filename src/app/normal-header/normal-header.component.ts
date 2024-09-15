import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-header',
  templateUrl: './normal-header.component.html',
  styleUrls: ['./normal-header.component.scss']
})
export class NormalHeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  onLogout() {
    this.router.navigate(['firstpage']);
    // localStorage.removeItem('userId');
  }
  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
