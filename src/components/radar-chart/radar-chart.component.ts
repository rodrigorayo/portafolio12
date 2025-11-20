import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class RadarChartComponent {
  labels = input.required<string[]>();
  values = input.required<number[]>();

  chartSize = 300;
  center = this.chartSize / 2;
  radius = this.chartSize * 0.4;
  levels = 5;

  levelLines = computed(() => {
    return Array.from({ length: this.levels }, (_, i) => {
      const levelRadius = (this.radius / this.levels) * (i + 1);
      const points = this.labels().map((_, index) => {
        const angle = (Math.PI * 2 * index) / this.labels().length - Math.PI / 2;
        const x = this.center + levelRadius * Math.cos(angle);
        const y = this.center + levelRadius * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
      return points;
    });
  });

  axisLines = computed(() => {
    return this.labels().map((_, index) => {
      const angle = (Math.PI * 2 * index) / this.labels().length - Math.PI / 2;
      const x = this.center + this.radius * Math.cos(angle);
      const y = this.center + this.radius * Math.sin(angle);
      return { x1: this.center, y1: this.center, x2: x, y2: y };
    });
  });

  axisLabels = computed(() => {
    return this.labels().map((label, index) => {
      const angle = (Math.PI * 2 * index) / this.labels().length - Math.PI / 2;
      const labelRadius = this.radius * 1.15;
      const x = this.center + labelRadius * Math.cos(angle);
      const y = this.center + labelRadius * Math.sin(angle);
      let textAnchor = 'middle';
      if (x < this.center - 10) {
        textAnchor = 'end';
      } else if (x > this.center + 10) {
        textAnchor = 'start';
      }
      return { x, y, label, textAnchor };
    });
  });

  shapePoints = computed(() => {
    return this.values().map((value, index) => {
      const angle = (Math.PI * 2 * index) / this.labels().length - Math.PI / 2;
      const pointRadius = this.radius * value;
      const x = this.center + pointRadius * Math.cos(angle);
      const y = this.center + pointRadius * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  });
}
