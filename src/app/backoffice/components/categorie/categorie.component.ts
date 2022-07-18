
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CategoriesService } from '../../services/categories.service';
import { Categorie } from '../../models/categorie.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  displayedColumns: string[] = ['libelle', 'description', 'actions'];
  dataSource: Categorie[] = [];
  modalRef?: BsModalRef;
  public formTitle: string = 'Ajouter une categorie';
  public btnTitle = 'Ajouter';
  public selectedCategorie = <Categorie>{};
  public libelle = new FormControl('', Validators.required);
  public description = new FormControl('', Validators.required);
  public showError: boolean = false;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private categorieService: CategoriesService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.index()
  }
 /*  getErrorMessage() {
    if(this.libelle.hasError('required')) {
      return 'Veuillez saisir le libellé.'
    }
    if(this.description.hasError('required')) {
      return 'Veuillez saisir la description.'
    }
  } */
  openModal(formCategorie: TemplateRef<any>, categorie: Categorie) {
    this.modalRef = this.modalService.show(formCategorie);
    if(categorie._id) {
      this.formTitle = "Modier une categorie"
      this.btnTitle = "Modifier";
      this.selectedCategorie = categorie;
      this.libelle.setValue(categorie.libelle);
      this.description.setValue(categorie.description);
    }
  }
  index() {
    this.categorieService.getCategories().subscribe( data => this.dataSource = data);
  }
  close() {
    this.modalRef?.hide()
    this.libelle.reset();
    this.description.reset();
    this.selectedCategorie = <Categorie>{};
    this.showError = false;
  }

  save() {
    if(!this.libelle.value || !this.description.value) {
      this.showError = true;
      return;
    }
    this.selectedCategorie.libelle = this.libelle.value;
    this.selectedCategorie.description = this.description.value;
    if(this.selectedCategorie._id) {
      //Update
      alert('API pas encore disponible !!')
      this.close();
    }
    else {
      alert('API pas encore disponible !!')
      this.close();
      //this.categorieService.add(this.selectedCategorie).subscribe( data => this.index())
    }


  }
  delete(categorie: Categorie) {
    alert('API pas encore disponible !!')
  }
}
