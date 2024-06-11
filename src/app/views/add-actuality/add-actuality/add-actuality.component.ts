import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActualittyService } from "src/app/services/actualitty.service";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: 'app-add-actuality',
  templateUrl: './add-actuality.component.html',
  styleUrl: './add-actuality.component.scss'
})
export class AddActualityComponent implements OnInit {
  actualityForm !: FormGroup;

  constructor(private formBuilder: FormBuilder , private categoryService : CategoryService , private actualityService : ActualittyService , private router : Router ) {
    this.actualityForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      file: [null, Validators.required]
    });
  }
  categories: any[] = []
  ngOnInit(): void {
     this.categoryService.getAllCategories().subscribe(res=>{
      this.categories =res
     })
  }
  onSubmit() {
    if (this.actualityForm.valid) {
      const formData = new FormData();
      formData.append('title', this.actualityForm.get('title')?.value);
      formData.append('subtitle', this.actualityForm.get('subtitle')?.value);
      formData.append('description', this.actualityForm.get('description')?.value);
      formData.append('category', this.actualityForm.get('category')?.value);
      formData.append('file', this.actualityForm.get('file')?.value);
      this.actualityService.createActuality(formData).subscribe(res => {
          if(res){
                this.router.navigate(['/dash/actualities'])
          }
      })
    }
  }

  onFileSelected(event: any) {
    this.actualityForm.get('file')?.setValue(event.target.files[0]);
  }
}