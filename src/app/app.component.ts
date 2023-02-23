import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Department } from './Department';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ועדות';
  departments: Department[] = [
    { name: 'ועד הנהלה', hasRibbon: true, ribbonText: 'ועדה נבחרת'},
    { name: 'ועדת פיתוח קהילתי' },
    { name: 'ועדת חינוך' },
    { name: 'ועדת ביקורת', hasRibbon: true, ribbonText: 'ועדה נבחרת' },
    { name: 'ועדת היכרות', hasRibbon: true, ribbonText: 'ועדה נבחרת' },
    { name: 'ועדת איקלום' },
    { name: 'ועדת נוער' },
    { name: 'ועדת תרבות' },
    { name: 'ועדת פרט' },
  ];

  constructor(private dialog: MatDialog) {}
  openModal(department: Department) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {department},
      width: '500px',
      panelClass: 'custom-modal-container'
    });
  }
}
