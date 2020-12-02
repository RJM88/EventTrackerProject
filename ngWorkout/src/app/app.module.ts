import { BrowserModule } from '@angular/platform-browser';
import { WorkoutService } from './services/workout.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { WorkoutDatePipe } from './pipes/workout-date.pipe';




@NgModule({
  declarations: [AppComponent, WorkoutsComponent, WorkoutDatePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
