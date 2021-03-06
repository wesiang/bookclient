import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, } from '@angular/material';
// import {Observable} from 'rxjs/Observable';


export interface BookData{
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  activate: string;
}

// const initData:BookData[] = [{id:1, title:"LOADING... ... ", firstname:"", lastname: "", activate: ""}];


@Component({
    selector: 'app-listitem',
    templateUrl: './listitem.component.html',
    styleUrls: ['./listitem.component.css']
  })

export class ListitemComponent implements OnInit {

  displayCols = ['id', 'title', 'firstname', 'lastname'];
  datasource = new MatTableDataSource() ;

  @Input()
  //passResult : BookData[];
  passResult : any;
  itemResult : string[];


@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  
  constructor() {
   }

  ngOnInit() {

  }


  ngOnChanges(){
    
    //STARTING OF PROMISE CODE
    setTimeout(()=>{
      var promise1 = Promise.resolve(this.passResult);


      promise1.then((datasource)=> {

      console.log("BookData data>>>>>>>", this.passResult);
      console.log("MatTableDatasource data>>>>>>>", this.datasource);

      this.datasource.data = this.passResult;
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;

      console.log("Datasource.DATA>>>>>>>", this.datasource.data);

      })
    },500); //time delay was originally required before introducing ngOnChanges
 

  }
      
  applyFilter(filterValue: string) {
      this.datasource.filter = filterValue.trim().toLowerCase();
      if (this.datasource.paginator) {
        this.datasource.paginator.firstPage();
      }
  }

  ngAfterViewInit() {

  }


}