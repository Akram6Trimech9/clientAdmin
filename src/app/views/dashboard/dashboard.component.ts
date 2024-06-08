import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';
import Chart from 'chart.js/auto';

  import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { RdvService } from 'src/app/services/rdv.service';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}
 
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
})
export class DashboardComponent implements OnInit {
  chart: any;
  rdvs: any[] = [];

  constructor(private rdvService: RdvService) {}

  ngOnInit() {
    this.fetchRdvs();
    this.initChart();
  }

  fetchRdvs() {
    this.rdvService.getAllRdv().subscribe((rdvs) => {
      this.rdvs = rdvs;
      this.updateChart();
    });
  }

  initChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'RDVs per Month',
            data: [],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of RDVs',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Month',
            },
          },
        },
      },
    });
  }

  updateChart() {
     const rdvsByMonth = this.rdvs.reduce((acc, rdv) => {
      console.log(rdv,acc)
      const month = rdv.date.toLocaleDateString('en-US', { month: 'short' });
      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month]++;
      return acc;
    }, {});

    // Update the chart data
    this.chart.data.labels = Object.keys(rdvsByMonth);
    this.chart.data.datasets[0].data = Object.values(rdvsByMonth);
    this.chart.update();
  }
}