import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    }
  };

  public barChartLabels: string[] = ['Person1', 'Person2', 'Person3', 'Person4', 'Person5'];

  public barChartType: ChartType = 'bar';

  public barChartLegend = true;
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [5, 8, 12, 7, 4], label: 'No. of Books',
        backgroundColor: ['#2F5597', '#2F5597', '#2F5597','#2F5597','#2F5597'],
       }
    ]
  };

  public circleChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true
      }
    }
  };

  // Chart data and labels
  public circleChartLabels: string[] = ['Person1', 'Person2', 'Person3', 'Person4', 'Person5'];
  
  public circleChartData: ChartData<'doughnut'> = {
    labels: this.circleChartLabels,
    datasets: [
      {
        data: [14, 22, 33, 20, 11],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#e8dd10','#c7c6bf'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56','#e8dd10','#c7c6bf'],
        borderWidth: 1,
        // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        // hoverBorderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBorderWidth: 2,
      },
    ]
  };

  // Specify the type of chart as 'doughnut'
  public circleChartType: ChartType = 'doughnut';
}
