import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1
{

  constructor(public navCtrl: NavController)
  {
    this.initChart();
  }

  private initChart()
  {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(this.drawChart);
  }

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  public drawChart()
  {
    let housing: number = parseInt((<HTMLInputElement>document.getElementById("housingVar")).value);
    let commute: number = parseInt((<HTMLInputElement>document.getElementById('commuteVar')).value);
    let grocery: number = parseInt((<HTMLInputElement>document.getElementById('groceryVar')).value);
    let insurance: number = parseInt((<HTMLInputElement>document.getElementById('insuranceVar')).value);
    let other: number = parseInt((<HTMLInputElement>document.getElementById('otherVar')).value);
    let savings: number = parseInt((<HTMLInputElement>document.getElementById('savingsVar')).value);

    var data = google.visualization.arrayToDataTable([
      ['Expense', 'Cost per Week'],
      ['Housing', housing],
      ['Commute', commute],
      ['Grocery', grocery],
      ['Insurance', insurance],
      ['Other', other],
      ['Savings', savings]
    ]);
    var options = {
      //title: 'Weekly Budget',
      pieHole: 0.2
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
}
