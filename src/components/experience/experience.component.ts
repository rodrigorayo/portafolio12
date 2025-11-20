import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {
  experience = signal<ExperienceItem[]>([
    {
      period: '2023 - 2024',
      role: 'Pasante de Desarrollo Backend',
      company: 'Tech Solutions Inc.',
      description: 'Colaboré en el mantenimiento de una API REST para clientes internos, resolviendo bugs y desarrollando pequeños endpoints bajo supervisión. Aprendí sobre el ciclo de vida del software y buenas prácticas de codificación en un entorno profesional.'
    },
    {
      period: '2022 - 2023',
      role: 'Asistente de Laboratorio de Redes',
      company: 'Universidad Nacional',
      description: 'Brindé soporte a estudiantes en la configuración de equipos de red (routers, switches) y en la resolución de problemas de conectividad para prácticas académicas. Monitoricé la salud de la red del laboratorio.'
    }
  ]);

  cvFileUrl = './assets/cv.pdf'; // Placeholder path
}
