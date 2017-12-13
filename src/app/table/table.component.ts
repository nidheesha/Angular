import {Component, OnInit, EventEmitter, Input,Output} from '@angular/core';
import {TableData} from './table-data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input()
  rows:Array<any>;
  // public columns:Array<any> = [
  //     {title: 'S.No', name: 'S.No'},
  //   {title: 'Start Time',className: 'text-warning', name: 'starttime',sort: 'desc'},
  //   {title: 'End Time', className: ['office-header', 'text-success'], name: 'endtime', sort: ''},
  //   {title: 'Assets Analysed', name: 'assetsanalysed', sort: false},
  //   {title: 'Report', name: 'report'}
  //   {title: 'Repo', name: 'repo'}
  // ];
   @Input()
   columns:Array<any>;
  data:Array<any>;
 
  // public columns:Array<any> = [
  //   {title: 'Name', name: 'name' },
  //   {
  //     title: 'Position',
  //     name: 'position',
  //     sort: false
  //       },
  //   {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
  //   {title: 'Extn.', name: 'ext', sort: ''},
  //   {title: 'Start date', className: 'text-warning', name: 'startDate'},
  //   {title: 'Salary ($)', name: 'salary'}
  // ];
  // private data:Array<any> = TableData;

  public page:number = 1;
  public itemsPerPage:number;
  // public maxSize:number = 5;
  // public numPages:number = 1;
   public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };




  public constructor() {
  }

  public ngOnInit():void {
    this.data = this.rows;
  	this.itemsPerPage=this.data.length;
  	 this.length = this.data.length;
    this.onChangeTable(this.config);
    console.log(this.data[0]);
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
   @Output()
  onclick = new EventEmitter<any>();

  public onCellClick(data: any): any {
    //console.log(data);
    this.onclick.emit(data);
  }
}