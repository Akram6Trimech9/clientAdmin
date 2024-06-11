import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {
  documentId: any;
  title !: string  ;
  description!:string; 
   category!:string ; 
   prevDocument: any 
  fileToUpload: any ;
  fileName: string = '';
  isImage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private router : Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.documentId = params['id'];
      this.getDocumentDetails(this.documentId);
    });
  }

  getDocumentDetails(id: any) {
    this.documentService.getDocument(id).subscribe(
      (document: any) => {
        this.prevDocument = document;
      }
     
    );
  }
  updateDocument() {
    const formData = new FormData();
    formData.append('title', this.title !== undefined ? this.title : this.prevDocument.title);
    formData.append('category', this.category !== undefined ? this.category : this.prevDocument.category);
    formData.append('description', this.description !== undefined ? this.description : this.prevDocument.description);
  
    if (this.fileToUpload) {
      formData.append('file', this.fileToUpload);
    }
  
    this.documentService.updateDocument(this.documentId, formData).subscribe(
      () => {
        this.router.navigate([`/dash/documents`]);
      },
      error => {
        console.error('Error updating document:', error);
      }
    );
  }
  
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.fileToUpload = files[0];
      this.fileName = this.fileToUpload.name;
      this.isImage = this.fileToUpload.type.startsWith('image');
      if (this.isImage) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.fileToUpload = e.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
      }
    }
  }
}
