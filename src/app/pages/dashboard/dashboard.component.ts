import { Component, ViewEncapsulation, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
} from 'ng-apexcharts';

import {MatPaginator} from '@angular/material/paginator';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { FuncionarioModel } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';


interface month {
  value: string;
  viewValue: string;
}

export interface salesOverviewChart{

  
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}

export interface yearlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

export interface monthlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

interface stats {
  id: number;
  time: string;
  color: string;
  title?: string;
  subtext?: string;
  link?: string;
}

export interface funcionariosBirth {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

// ecommerce card
interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppDashboardComponent implements OnInit {

  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription: Subscription;

  funcionariosCount: any = [];
  FUNCIONARIOS_DATA: FuncionarioModel[] = [];

  dataSource: MatTableDataSource<FuncionarioModel>;


  funcionariosActivos(dato: FuncionarioModel) {
    return dato.estado == 1;
  }
  

  ngOnInit() {
    
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth(); // Mes actual (0 = enero, 11 = diciembre)
    const diaActual = fechaActual.getDate();  // Día actual

    this.funcionarioService.getFuncionarios().subscribe(res=>{
      this.funcionariosCount = res.filter(this.funcionariosActivos).length
      this.FUNCIONARIOS_DATA = res
      //nro de funcionarios activos
      console.log(this.funcionariosCount)
      this.dataSource = new MatTableDataSource(this.FUNCIONARIOS_DATA.sort((a, b) => {
        const fechaA = new Date(fechaActual.getFullYear(), new Date(a.fecha_nacimiento.toString()).getMonth(), new Date(a.fecha_nacimiento.toString()).getDate());
        const fechaB = new Date(fechaActual.getFullYear(), new Date(b.fecha_nacimiento.toString()).getMonth(), new Date(b.fecha_nacimiento.toString()).getDate());
      
        // Ajustar las fechas que ya pasaron este año para considerarlas el próximo año
        if (fechaA < fechaActual) fechaA.setFullYear(fechaA.getFullYear() + 1);
        if (fechaB < fechaActual) fechaB.setFullYear(fechaB.getFullYear() + 1);
      
        // Primero los cumpleaños iguales a la fecha actual
        if (fechaA.getMonth() === mesActual && fechaA.getDate() === diaActual) return -1;
        if (fechaB.getMonth() === mesActual && fechaB.getDate() === diaActual) return 1;
      
        // Ordenar por la diferencia de tiempo
        return fechaA.getTime() - fechaB.getTime();
      }).slice(0,5));
    });
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        let hour = this.rxTime.getHours();
        let minuts = this.rxTime.getMinutes();
        let seconds = this.rxTime.getSeconds();
        //let a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        let NewTime = hour + ":" + minuts + ":" + seconds
        //console.log(NewTime);
        this.rxTime = time;
      });
  }

  

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public salesOverviewChart!: Partial<salesOverviewChart> | any;
  public yearlyChart!: Partial<yearlyChart> | any;
  public monthlyChart!: Partial<monthlyChart> | any;

  

  displayedColumns: string[] = ['nombre', 'paterno', 'materno'];
  

  months: month[] = [
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];

  // recent transaction
  stats: stats[] = [
    {
      id: 1,
      time: '09:10 am',
      color: 'primary',
      subtext: 'ALTAMIRANO TORRES PAVEL',
    },
    {
      id: 2,
      time: '09:08 am',
      color: 'accent',
      title: 'Dav',
      link: '#ML-3467',
    },
    {
      id: 3,
      time: '09:08 am',
      color: 'success',
      subtext: 'TICONA CHAVEZ ANT',
    },
    {
      id: 4,
      time: '09:07 am',
      color: 'warning',
      title: 'LOAYZA RAFAEL',
      link: '#ML-3467',
    },
    {
      id: 5,
      time: '09:07 am',
      color: 'error',
      title: 'CAMARA AMAYA M.',
      link: '#ML-3467',
    },
    {
      id: 6,
      time: '09:05 am',
      color: 'success',
      subtext: 'GUERRA PATTZI L',
    },
  ];

  // ecommerce card
  productcards: productcards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/s4.jpg',
      title: 'Boat Headphone',
      price: '285',
      rprice: '375',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/s5.jpg',
      title: 'MacBook Air Pro',
      price: '285',
      rprice: '375',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/s7.jpg',
      title: 'Red Valvet Dress',
      price: '285',
      rprice: '375',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/s11.jpg',
      title: 'Cute Soft Teddybear',
      price: '285',
      rprice: '375',
    },
  ];

  constructor(private funcionarioService: FuncionarioService) {
    // sales overview chart
    this.salesOverviewChart = {
      series: [
        {
          name: 'Eanings this month',
          data: [355, 390, 300, 350, 390, 180, 355, 390],
          color: '#5D87FF',
        },
        {
          name: 'Expense this month',
          data: [280, 250, 325, 215, 250, 310, 280, 250],
          color: '#49BEFF',
        },
      ],

      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '35%', borderRadius: [4] },
      },
      chart: {
        type: 'bar',
        height: 390,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      legend: { show: false },
      xaxis: {
        type: 'category',
        categories: [
          '16/08',
          '17/08',
          '18/08',
          '19/08',
          '20/08',
          '21/08',
          '22/08',
          '23/08',
        ],
        labels: {
          style: { cssClass: 'grey--text lighten-2--text fill-color' },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: 'grey--text lighten-2--text fill-color',
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: 'butt',
        colors: ['transparent'],
      },
      tooltip: { theme: 'light' },

      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
    };

    // yearly breakup chart
    this.yearlyChart = {
      series: [38, 40, 25],

      chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 130,
      },
      colors: ['#5D87FF', '#ECF2FF', '#F9F9FD'],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '75%',
            background: 'transparent',
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 120,
            },
          },
        },
      ],
      tooltip: {
        enabled: false,
      },
    };

    // mohtly earnings chart
    
    this.monthlyChart = {
      series: [
        {
          name: '',
          color: '#49BEFF',
          data: [25, 66, 20, 40, 12, 58, 20],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 60,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        colors: ['#E8F7FF'],
        type: 'solid',
        opacity: 0.05,
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };
  }
}
