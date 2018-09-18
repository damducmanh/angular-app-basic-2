import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

// component
import { ChildBookComponent } from './child-book/child-book.component';
import { ChildBookFormComponent } from './child-book-form/child-book-form.component';
// import service
import { ShowlogService } from './showlog.service';
import { MovieService } from './movie.service';
import { PageSkillComponent } from './page-skill/page-skill.component';
@NgModule({
  // important component
  declarations: [
    AppComponent,
    routingComponent,
    ChildBookComponent,
    ChildBookFormComponent,
    PageSkillComponent
  ],
  // importat module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // impport service
  providers: [ShowlogService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
