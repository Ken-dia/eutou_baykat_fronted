import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { FileUpload } from '../../models/file-upload.model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;
  confirmId: string
  private tmpImages!: FileUpload[];
  constructor(
    private produitService: ProduitService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
    this.confirmId = data.confirmId;
  }

  ngOnInit(): void {
    this.tmpImages = this.produitService.getTmpImages();
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.deleteImage(this.confirmId);
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  private deleteImage(name: String){
    const image = this.tmpImages.find((e:FileUpload)=> e.name === name);
    this.produitService.deleteImage(image!);
  }

}
/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
 export class ConfirmDialogModel {

  constructor(public title: string, public message: string, public confirmId: string) {
  }
}

