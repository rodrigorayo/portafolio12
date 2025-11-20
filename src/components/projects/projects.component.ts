import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      title: 'API REST para Gestión de Inventario',
      category: 'Proyecto Académico',
      description: 'Desarrollo de una API RESTful con Node.js y Express para gestionar productos. Incluye autenticación JWT y operaciones CRUD completas.',
      tags: ['Node.js', 'Express', 'JWT', 'MongoDB', 'API REST'],
      link: 'https://github.com/user/repo'
    },
    {
      title: 'Analizador de Tráfico de Red Básico',
      category: 'Proyecto Extracurricular',
      description: 'Script en Python utilizando Scapy para capturar y analizar paquetes de red en una red local, identificando protocolos y puertos comunes.',
      tags: ['Python', 'Scapy', 'Redes', 'Seguridad'],
      link: 'https://github.com/user/repo'
    },
    {
      title: 'Sistema de Login Seguro con Hashing',
      category: 'Investigación Aplicada',
      description: 'Implementación de un sistema de autenticación en Java que almacena contraseñas de forma segura utilizando algoritmos de hashing (SHA-256) y salting.',
      tags: ['Java', 'Criptografía', 'Seguridad', 'Hashing'],
    },
    {
      title: 'Pequeño E-commerce con Spring Boot',
      category: 'Proyecto Académico',
      description: 'Creación de una aplicación web de comercio electrónico con Spring Boot y Thymeleaf, manejando un catálogo de productos y un carrito de compras.',
      tags: ['Java', 'Spring Boot', 'Thymeleaf', 'SQL']
    },
  ]);
}
