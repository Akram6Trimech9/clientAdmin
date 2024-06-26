import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-actuality',
  templateUrl: './category-actuality.component.html',
  styleUrl: './category-actuality.component.scss'
})

export class CategoryActualityComponent  implements OnInit{
  allCategories : any[] =[]
  constructor(private categoryService : CategoryService){

  }
  ngOnInit(): void {
     this.categoryService.getAllCategories().subscribe(res => {
        this.allCategories = res
        console.log(res,"okok")
     })
  }
  deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.allCategories = this.allCategories.filter((item) => item._id !== id);
      },
      (error) => {
        console.error('Error deleting actuality:', error);
      }
    );
  }
}
