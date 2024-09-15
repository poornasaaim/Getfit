import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ow-header',
  templateUrl: './ow-header.component.html',
  styleUrls: ['./ow-header.component.scss']
})
export class OwHeaderComponent implements OnInit {

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
