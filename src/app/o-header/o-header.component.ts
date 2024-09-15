import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-o-header',
  templateUrl: './o-header.component.html',
  styleUrls: ['./o-header.component.scss']
})
export class OHeaderComponent implements OnInit {

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
