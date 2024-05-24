import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

export interface Template {
  id: string;
  name: string;
  region: string;
  modifiedBy: string;
  modifiedOn: string;
  actions: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  startDate: Date;
  endDate: Date;
  selectedOption: string;

  displayedColumns: string[] = ['id', 'name', 'region', 'modifiedBy', 'modifiedOn', 'actions'];
  dataSource = new MatTableDataSource<Template>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    this.startDate = new Date();
    this.endDate = new Date();   
    this.selectedOption = '';  

    // Dummy data for table
    const dummyData: Template[] = [
      { id: 'T01', name: 'US-FDA-01', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T02', name: 'US-FDA-02', region: 'USA', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' },
      { id: 'T03', name: 'Europe-CESP-01', region: 'Europe', modifiedBy: 'CuneSoft Support', modifiedOn: '01-01-1970', actions: '' }
    ];

    this.dataSource.data = dummyData;
  }

  onSubmit() {
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    console.log('Selected Option:', this.selectedOption);
  }
}
