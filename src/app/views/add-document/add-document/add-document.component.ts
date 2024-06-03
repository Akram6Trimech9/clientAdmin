import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.scss'
})
export class AddDocumentComponent {
  documentForm: FormGroup;
  documentCategories = ['juridique', 'fiscale', 'economique', 'sociale'];
 
  constructor(private formBuilder: FormBuilder , private documentService :DocumentService) {
    this.documentForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      files: [[], Validators.required]
    });
  }

  onFileSelected(event: any) {
    this.documentForm.get('files')?.setValue(event.target.files);
  }

  onSubmit() {
    if (this.documentForm.valid) {
      const formData = new FormData();
      formData.append('title', this.documentForm.get('title')?.value);
      formData.append('category', this.documentForm.get('category')?.value);
      formData.append('description', this.documentForm.get('description')?.value);
  
       for (const file of this.documentForm.get('files')?.value) {
        formData.append('files', file);
      }
  
      this.documentService.addDocument(formData).subscribe(
        (res) => {
          console.log(res, 'ress');
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
 