import { Component, ChangeDetectionStrategy, AfterViewInit, ElementRef, inject } from '@angular/core';

// Importing section components
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';

declare var lucide: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent
  ]
})
export class AppComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);

  ngAfterViewInit() {
    // This is needed to render Lucide icons after the view is initialized.
    if (typeof lucide !== 'undefined') {
      lucide.createIcons({
        element: this.elementRef.nativeElement
      });
    }
  }
}
