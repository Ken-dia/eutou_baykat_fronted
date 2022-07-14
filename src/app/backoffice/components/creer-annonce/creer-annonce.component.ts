import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Categorie } from '../../models/categorie.model';
import { FileUpload } from '../../models/file-upload.model';
import { Unite } from '../../models/unite.model';
import { CategoriesService } from '../../services/categories.service';
import { ProduitService } from '../../services/produit.service';
import { UniteService } from '../../services/unite.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.scss']
})
export class CreerAnnonceComponent implements OnInit {
  currentFile?: FileUpload;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  selectedFiles?: FileList;
  public saveForm!: FormGroup;
  tmpImages!: FileUpload[];
  categories: Categorie[] = [];
  unites: Unite[] = [];
  constructor(
    private fb: FormBuilder,
    private produitService: ProduitService,
    private categorieService: CategoriesService,
    private uniteService: UniteService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.saveForm = this.fb.group({
      images: [],
      libelle: [
        '',
        [Validators.required]
      ],
      quantite: [
        '',
        [Validators.required]
      ],
      categories: [
        '',
        [Validators.required]
      ],
      description: [
        '',
        [Validators.required]
      ],
      prices:this.fb.array([this.createPriceGroup()], [Validators.required])
    });
    this.getCategories();
    this.getUnites();
  }
  private getCategories(): void{
    this.categorieService.getCategories().subscribe( data =>
      this.categories = data);
  }
  private getUnites(): void{
    this.uniteService.getUnites().subscribe( data =>
      this.unites = data);
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(){
    this.progress = 0;
    this.message = "";
    if(this.selectedFiles)
    Array.prototype.forEach.call(this.selectedFiles, f => {
      this.selectedFiles = undefined;
      if (f) {
        this.currentFile = new FileUpload(f);
        this.produitService.pushFileToStorage(this.currentFile!).subscribe(
          percentage => {
            this.progress = Math.round(percentage ? percentage : 0);
            this.tmpImages = this.produitService.getTmpImages();
            this.saveForm.get('images')?.setValue(this.tmpImages);
            this.message = "Image Ajoutée avec succé";
          },
          error => {
            if (error.error && error.error.message)
              this.message = error.error.body;
            else
            this.message = 'Image peut pas être chargé';
          }
        );
      }
    });
  }
  deleteDialog(name:string){
    const message = `Êtes vous sûr(e) de vouloir supprimer ${name}?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message, name);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.tmpImages = this.produitService.getTmpImages();
      this.saveForm.get('images')?.setValue(this.tmpImages);
    });
  }
  saveProduct(){
    const data = this.produitService.saveProduit(this.saveForm.value).subscribe( data => {
      console.log(data);
    },
        error => console.log(error));
  }

  public get priceList(): FormArray {
    return this.saveForm.get('prices') as FormArray;
  }

  public addPrice(): void {
    this.priceList.push(this.createPriceGroup());
  }
  private createPriceGroup(): FormGroup {
    return this.fb.group({
      prix: [
        '',
        [Validators.required]
      ],
      min: [
        '',
        [Validators.required]
      ],
      max: [
        '',
        [Validators.required]
      ],
      unite: [
        '',
        [Validators.required]
      ],
    });
  }
}
