import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Excel-to-Json';

  convertedJson!:string; 
  
  fileUpload(event:any){
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload=(event) =>{
      console.log(event);
      let binaryData = event.target?.result;
      let WorkBook = XLSX.read(binaryData, {type:'binary'});
      WorkBook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(WorkBook.Sheets[sheet]);
        console.log();
        this.convertedJson= JSON.stringify(data, undefined, 4)
      });
      console.log(WorkBook);
    }
  }

}
