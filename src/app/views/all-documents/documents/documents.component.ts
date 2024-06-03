import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
 
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documents: any[] = [];

  constructor(private documentService: DocumentService) {}

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

  // deleteDocument(document: Document) {
  //   this.documentService.deleteDocument(document.id).subscribe(
  //     () => {
  //       this.getDocuments(); // Refresh the document list
  //     },
  //     (error) => {
  //       console.error('Error deleting document:', error);
  //     }
  //   );
  // }

  // updateDocument(document: Document) {
  //   // Navigate to the update document page, passing the document as a parameter
  //   this.router.navigate(['/update-document', document.id]);
  // }

  accessDocument(document: Document) {
    // Navigate to the document view page, passing the document as a parameter
   }
}