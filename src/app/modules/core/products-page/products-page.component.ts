import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  categories = [
    { name: 'Protein', items: ['Chicken', 'Beef', 'Fish', 'Tofu'], open: false },
    { name: 'Produce', items: ['Letuce', 'Tomato', 'Carrot', 'Cucumber'], open: false },
    { name: 'Frozen Food', items: ['Frozen Pizza', 'Ice Cream', 'Frozen Vegetables', 'Chicken Nuggets'], open: false },
    { name: 'Fruits', items: ['Apple', 'Banana', 'Orange', 'Grapes'], open: false }
  ];

  toggleCategory(index: number) {
    this.categories[index].open = !this.categories[index].open;
  }
}
