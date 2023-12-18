import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  hidden=true
  constructor(public dialog: MatDialog) {}
  profileModal(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '860px',
      data: { title: 'Modal Title', content: 'Modal Content' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
