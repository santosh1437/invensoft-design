import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public dashboard: boolean = false;
  public addBook: boolean = false;
  public viewBook: boolean = false;
  public deleteBook: boolean = false;

  public currentSection: string = 'Dashboard';

  constructor() { }

  public openSection(sectionName: string) {
    this.dashboard = false;
    this.addBook = false;
    this.viewBook = false;
    this.deleteBook = false;

    this.currentSection = this.getSectionName(sectionName);

    switch (sectionName) {
      case 'dashboard':
        this.dashboard = true;
        break;
      case 'addBook':
        this.addBook = true;
        break;
      case 'viewBook':
        this.viewBook = true;
        break;
      case 'deleteBook':
        this.deleteBook = true;
        break
    }
  }

  public getSectionName(sectionKey: string): string {
    switch (sectionKey) {
      case 'dashboard':
        return 'Dashboard';
      case 'addBook':
        return 'Add Book';
      case 'viewBook':
        return 'View Books';
      case 'deleteBook':
        return 'Delete Book';
      default:
        return 'Dashboard';
    }
  }
}
