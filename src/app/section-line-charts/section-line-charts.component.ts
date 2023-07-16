import { Component } from '@angular/core';

const LINE_CHART_LABELS: string[] = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']


@Component({
  selector: 'app-section-line-charts',
  templateUrl: './section-line-charts.component.html',
  styleUrls: ['./section-line-charts.component.css']
})
export class SectionLineChartsComponent {
  private getGradientFill(color: string): any {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, `rgba(${color}, 0.2)`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);
      return gradient;
    }
    return null;
  }

  public lineChartData: any[] = [
    {
      data: [50, 200, 300, 190, 220, 40, 60, 65, 160, 120, 90, 50],
      label: 'Monthly',
      pointBackgroundColor: '#1EA7FF',
      borderColor: '#1EA7FF',
      backgroundColor: this.getGradientFill('30, 167, 255'),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1EA7FF',
      fill: true,
    },
    {
      data: [100, 110, 380, 260, 170, 210, 180, 310, 280, 150, 120, 100],
      label: 'Daily',
      pointBackgroundColor: '#5051F9',
      backgroundColor: this.getGradientFill('80, 81, 249'),
      borderColor: '#5051F9',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#5051F9',
      fill: true,
    },
  ]
  public lineChartLabels: string[] = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        borderWidth: 2, // line thickness
        tension: 0.4 // set the line tension to 0.4 for a smooth curve
      },
      point: {
        borderWidth: 2, // Adjust the point border thickness here
        radius: 5, // Adjust the point radius here
      },
    },
    scales: {
      y: {
        display: true,
        grid: {
          display: true,
          borderColor: 'rgba(0, 0, 0, 0)',
        },
        ticks: {
          min: 0,
          max: 400,
          stepSize: 100
        },
      },
      x: {
        display: true,
        grid: {
          display: false,
        }
      },
    },
  }
  public lineChartLegend = false;
}
