import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';

interface Certification {
  name: string;
  issuer: string;
  year: number;
}
interface SkillSet {
    labels: string[];
    values: number[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RadarChartComponent]
})
export class SkillsComponent {
  certifications = signal<Certification[]>([
    { name: 'Introducción a la Ciberseguridad', issuer: 'Cisco Networking Academy', year: 2023 },
    { name: 'Bases de Datos Relacionales (SQL)', issuer: 'Platzi', year: 2022 },
    { name: 'Java SE 8 Programmer', issuer: 'Oracle (En preparación)', year: 2024 },
  ]);

  skillData = signal<SkillSet>({
    labels: ['Backend Dev', 'Database Mgmt', 'Problem Solving', 'Security Focus', 'Academic Rigor'],
    values: [0.8, 0.75, 0.9, 0.65, 0.85] // Values from 0 to 1
  });
}
