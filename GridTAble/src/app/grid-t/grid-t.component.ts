import { Component,ViewChild,OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-grid-t',
  standalone: false,
  templateUrl: './grid-t.component.html',
  styleUrl: './grid-t.component.css'
})
export class GridTComponent implements OnInit {
  totalCars: number = 0;
  rowData: any[] = [];

  columnDefs:any[] = [
    { field: 'make', headerName: 'Make' },
    { field: 'model', headerName: 'Model' },
    { field: 'price', headerName: 'Price' }
  ];

  defaultColDef: any = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    minWidth: 100
  };

  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  Search: string = '';
  @ViewChild(AgGridAngular) grid!: AgGridAngular;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchPage(this.currentPage);
  }
  onSearch(event: any): void{
    this.Search = event.target.value;
    this.currentPage = 1; 
    this.fetchPage(this.currentPage); 
  };

  fetchPage(page:number):void {
    // this.http.get<any>(`http://localhost:5253/api/cars?page=${page}&limit=${this.pageSize}`)
    const url = `http://localhost:5253/api/cars?page=${page}&limit=${this.pageSize}&search=${this.Search}`;
    this.http.get<any>(url)
    .subscribe((response: any) => {
      this.rowData = response.data;
      this.totalPages = response.pagination.totalPages;
      this.currentPage = response.pagination.currentPage;
      this.totalCars = response.pagination.totalItems;
    });
  }
  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.fetchPage(this.currentPage + 1);
    }
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.fetchPage(this.currentPage - 1);
    }
  }
}
