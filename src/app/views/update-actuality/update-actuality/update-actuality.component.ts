import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ActualittyService } from 'src/app/services/actualitty.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-actuality',
  templateUrl: './update-actuality.component.html',
  styleUrl: './update-actuality.component.scss'
})
export class UpdateActualityComponent {
  actualityForm !: FormGroup;

  constructor( private formBuilder: FormBuilder , private categoryService : CategoryService , private actualityService : ActualittyService , private router : Router ,  private  route : ActivatedRoute  , ) {
    this.actualityForm = this.formBuilder.group({
      title: [this.prevActuality?.title, Validators.required],
      subtitle: [this.prevActuality?.subtitle, Validators.required],
      description: [this.prevActuality?.description, Validators.required],
      category: [this.prevActuality?.category, Validators.required],
      file: [null, Validators.required]
    });
   
  }
  categories: any[] = []
  pageId: any
  prevActuality : any 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageId = params['id'];
     });
     this.actualityService.getOneActuality(this.pageId).subscribe(res=>{ 
      this.prevActuality= res
     })
     this.categoryService.getAllCategories().subscribe(res=>{
      this.categories =res
     })
     this.actualityForm.patchValue({
      title: this.prevActuality.title,
      subtitle:  this.prevActuality.subtitle,
      description:this.prevActuality.description,
      category:this.prevActuality.category,
      file: this.prevActuality.file
    })
  }
  onSubmit() {
       const formData = new FormData();
      formData.append('title', this.actualityForm.get('title')?.value);
      formData.append('subtitle', this.actualityForm.get('subtitle')?.value);
      formData.append('description', this.actualityForm.get('description')?.value);
      formData.append('category', this.actualityForm.get('category')?.value);
      formData.append('file', this.actualityForm.get('file')?.value);
      this.actualityService.updateActuality(this.pageId,formData).subscribe(res => {
          if(res){
                this.router.navigate(['/dash/actualities'])
          }
      })
   }

  onFileSelected(event: any) {
    this.actualityForm.get('file')?.setValue(event.target.files[0]);
  }
}
