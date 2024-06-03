import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent  implements OnInit{
  categoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addCategoryService:  CategoryService ,
     private   router : Router   ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    const categoryData = this.categoryForm.value;
     if(this.categoryForm.valid){
         this.addCategoryService.createNewCategory(this.categoryForm.value).subscribe(res=>{
           this.router.navigate(['/actualities'])
         })
     }
  }
}
