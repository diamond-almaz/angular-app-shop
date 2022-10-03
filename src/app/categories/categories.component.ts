import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {


  constructor(public dataService: DataService) {
    
  }

  @Input() categories: string[] | null = null;

  categoryName = new FormControl('');

  changeCategory() {
    this.dataService.getProductsByCategory(this.categoryName.value as string)
  }

}
