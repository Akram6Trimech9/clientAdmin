import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
 
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documents: any[] = [];

  constructor(private documentService: DocumentService,private router :Router) {}

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe(
      (documents:any) => {
        this.documents = documents;
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
  }

  deleteDocument(id: any) {
    this.documentService.deleteDocument(id).subscribe(
      () => {
        this.getDocuments(); 
      },
      (error) => {
        console.error('Error deleting document:', error);
      }
    );
  }

  // updateDocument(document: Document) {
  //   // Navigate to the update document page, passing the document as a parameter
  //   this.router.navigate(['/update-document', document.id]);
  // }

  accessDocument(document: any) {
    window.open(`http://localhost:3000/${document}`, '_blank');
   }
   updateDocument(id:any){
    this.router.navigate([`/dash/documents/${id}`])
   }
}