import { Component, OnInit } from '@angular/core';
import { GetFileService } from 'src/app/Services/get-file.service';

@Component({
  selector: 'app-st-about',
  templateUrl: './st-about.component.html',
  styleUrls: ['./st-about.component.css']
})
export class StAboutComponent implements OnInit {
  mathchesPlayed: number;
  firstMatchDate: any;
  lastMatchDate: any;
  noOfCatches = 0;
  noOfWickets = 0;
  wonMatches = 0;
  tiedMatches = 0;
  lostMatches = 0;
  nooffifties = 0;
  totalruns = 0;
  average = 0;
  teamWiseBattingScore = [{
    title: 'v Pakistan',
    data: [['0', 0]]
  },
  {
    title: 'v England',
    data: [['0', 0]]
  },
  {
    title: 'v New Zealand',
    data: [['0', 0]]
  },
  {
    title: 'v Australia',
    data: [['0', 0]]
  },
  {
    title: 'v West Indies',
    data: [['0', 0]]
  },
  {
    title: 'v Sri Lanka',
    data: [['0', 0]]
  },
  {
    title: 'v South Africa',
    data: [['0', 0]]
  },
  {
    title: 'v Bangladesh',
    data: [['0', 0]]
  }];
  winLoseTiedChart = [['0', 100]];
  myOptions = {
    is3D: true,
    animation: {
      duration: 1000,
      easing: 'out',
    },
  };
  options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Runs'
    }
  };
  checkFirst = false;
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
            this.lines.push(tarr);
            if (this.checkFirst) {
              let run;
              // tslint:disable-next-line:radix
              this.noOfCatches += tarr[3] !== '-' ? parseInt(tarr[3]) : 0;
              // tslint:disable-next-line:radix
              this.noOfWickets += tarr[1] !== '-' ? parseInt(tarr[1]) : 0;
              console.log(tarr[0]);
              run = tarr[0] === 'TDNB' || tarr[0] === 'DNB' ? 0 :
              // tslint:disable-next-line:radix
              tarr[tarr[0].length - 1] === '*' ? parseInt(tarr[0].substr(1)) : parseInt(tarr[0]);
              if (run >= 50 && run < 100) {
                this.nooffifties++;
              }
              this.totalruns += run;
              this.tiedMatches += tarr[8] === 'tied' ? 1 : 0;
              this.lostMatches += tarr[8] === 'lost' ? 1 : 0;
              switch (tarr[5]) {
                case 'v Pakistan': this.storeTeamwiseData(0, tarr); break;
                case 'v England': this.storeTeamwiseData(1, tarr); break;
                case 'v New Zealand': this.storeTeamwiseData(2, tarr); break;
                case 'v Australia': this.storeTeamwiseData(3, tarr); break;
                case 'v West Indies': this.storeTeamwiseData(4, tarr); break;
                case 'v Sri Lanka': this.storeTeamwiseData(5, tarr); break;
                case 'v South Africa': this.storeTeamwiseData(6, tarr); break;
                case 'v Bangladesh': this.storeTeamwiseData(7, tarr); break;
                // tslint:disable-next-line:no-switch-case-fall-through
                default: break;
              }
            } else {
              this.checkFirst = true;
            }
          }
        }
        this.mathchesPlayed = this.lines.length - 1;
        this.average = this.totalruns / this.mathchesPlayed;
        this.firstMatchDate = this.lines[1][7];
        this.lastMatchDate = this.lines[this.mathchesPlayed][7];
        this.wonMatches = this.mathchesPlayed - (this.lostMatches + this.tiedMatches);
        this.winLoseTiedChart = [['Won', this.wonMatches], ['Tied', this.tiedMatches], ['Lost', this.lostMatches]];
      };
    },
    err => {
      console.log(err);
    });
  }
  storeTeamwiseData(num: number, tarr: any[]) {
    this.teamWiseBattingScore[num].data
                // tslint:disable-next-line:radix
                .push([tarr[7], tarr[tarr[0].length - 1] === '*' ? parseInt(tarr[0].substr(1)) : parseInt(tarr[0])]);
  }
}
