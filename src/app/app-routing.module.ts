import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// important component
import { PageBookComponent } from './page-book/page-book.component';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { PageSkillComponent } from './page-skill/page-skill.component';

const appRoutes: Routes = [
  { path: 'page-book', component: PageBookComponent },
  { path: 'page-hero', component: PageHeroComponent },
  { path: 'app-page-skill', component: PageSkillComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
// create array wrap name component
export const routingComponent = [ PageBookComponent , PageHeroComponent , PageSkillComponent]
