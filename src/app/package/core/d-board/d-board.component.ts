import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-d-board',
  templateUrl: './d-board.component.html',
  styleUrls: ['./d-board.component.scss']
})
export class DBoardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  chartData = {
    type: 'ComboChart',
    data: [
    ["Jan",  500, 600, 700],
    ["Feb",  800, 900, 1000],
    ["Mar",  400, 600, 500],
    ["Apr",  600, 500, 800],
    ["May",  400, 300, 200],
    ["Jun",  750, 700, 700],
    ["Jul",  800, 710, 700],
    ["Aug",  810, 720, 700],
    ["Sep",  820, 730, 1000],
    ["Oct",  900, 840, 700],
    ["Nov",  910, 850, 100],
    ["Dec",  920, 890, 0]
 ],
 columnNames: ["Month", "AP", "IP", "RE"],
 options: {
 hAxis: {
       title: 'Month'
    },
    vAxis:{
       title: 'Count'
    },
    colors: ['#79e2f2', '#ff8f73','#ffe380']
 },
 seriesType: 'bars',
 series: {2: {type: 'line'}},
 width: 350,
 height: 250
};

pieChartData = {
  type: 'PieChart',
  data: [
  ["AP",  500, 600, 700],
  ["IP",  800, 900, 1000],
  ["RE",  400, 600, 500],
],
columnNames: ["Month", "AP", "IP", "RE"],
options : {    
  slices: {  
     1: {offset: 0.2},
     3: {offset: 0.3}                   
  },
    colors: ['#79e2f2', '#ff8f73','#ffe380']
},
width: 350,
height: 250
};

columnChartData = {
  type: 'ColumnChart',
  data: [
  ["Jan",  500, 600, 700],
  ["Feb",  800, 900, 1000],
  ["Mar",  400, 600, 500],
  ["Apr",  600, 500, 800],
  ["May",  400, 300, 200],
  ["Jun",  750, 700, 700],
  ["Jul",  800, 710, 700],
  ["Aug",  810, 720, 700],
  ["Sep",  820, 730, 1000],
  ["Oct",  900, 840, 700],
  ["Nov",  910, 850, 100],
  ["Dec",  920, 890, 0]
],
columnNames: ["Month", "AP", "IP", "RE"],
options: {
hAxis: {
     title: 'Month'
  },
  vAxis:{
     title: 'Count'
  },
    colors: ['#79e2f2', '#ff8f73','#ffe380']
},
width: 850,
height: 250
};

}


//ColumnChart