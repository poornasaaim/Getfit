import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lean-header',
  templateUrl: './lean-header.component.html',
  styleUrls: ['./lean-header.component.scss']
})
export class LeanHeaderComponent implements OnInit {
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
