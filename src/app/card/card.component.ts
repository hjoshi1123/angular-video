import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../modal/modal.component';

@Component({
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
})
export class CardComponent {
    @Input() title: string;
    @Input() subTitle: string;
    
    constructor(public dialog: MatDialog) { }
    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: { name: 'Rushi', animal: 'Lab' }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }

}
