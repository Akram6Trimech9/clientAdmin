import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent {
  documentForm: FormGroup;
  documentCategories = ['juridique', 'fiscale', 'economique', 'sociale'];

  constructor(
    private formBuilder: FormBuilder,
    private documentService: DocumentService,
    private router: Router
  ) {
    this.documentForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      file: [null, Validators.required]  
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileType = file.type;
  
     if (fileType.includes('image') || fileType === 'application/pdf') {
      this.documentForm.get('file')?.setValue(file);
    } else {
       this.documentForm.get('file')?.setValue(null);
      alert('Please select an image or PDF file.');
    }
  }
  
  onSubmit() {
    if (this.documentForm.valid) {
      const formData = new FormData();
      formData.append('title', this.documentForm.get('title')?.value);
      formData.append('category', this.documentForm.get('category')?.value);
      formData.append('description', this.documentForm.get('description')?.value);
      formData.append('file', this.documentForm.get('file')?.value);  

      this.documentService.addDocument(formData).subscribe(
        (res) => {
          console.log(res, 'ress');
           this.router.navigate(['/dash/documents']);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
