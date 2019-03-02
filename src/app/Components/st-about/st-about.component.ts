import { Component, OnInit } from '@angular/core';
import { GetFileService } from 'src/app/Services/get-file.service';

@Component({
  selector: 'app-st-about',
  templateUrl: './st-about.component.html',
  styleUrls: ['./st-about.component.css']
})
export class StAboutComponent implements OnInit {
  mathchesPlayed: number;
  csv: any ;
  allTextLines: any;
  headers: any;
  lines: any[];
  constructor(private data: GetFileService) { }
  ngOnInit() {
    this.data.getfile()
    .subscribe(res => {
      console.log(res);
      const reader: FileReader = new FileReader();
      reader.readAsText(res);
      reader.onload = (e) => {
        this.csv = reader.result;
        this.allTextLines = this.csv.split(/\r|\n|\r/);
        this.headers = this.allTextLines[0].split(',');
        this.lines = [];
        for (const i of this.allTextLines) {
          // split content based on comma
          const data = i.split(',');
          if (data.length === this.headers.length) {
            const tarr = [];
            for (let j = 0; j < this.headers.length; j++) {
              tarr.push(data[j]);
            }
            // log each row to see output
            console.log(tarr);
            this.lines.push(tarr);
          }
        }
        // all rows in the csv file
        console.log('>>>>>>>>>>>>>>>>>', this.lines);
        this.mathchesPlayed = this.lines.length;
        console.log(this.mathchesPlayed);
      };
    },
    err => {
      console.log(err);
    });
  }
}
