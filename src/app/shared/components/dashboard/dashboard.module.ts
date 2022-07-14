import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [DashboardComponent, NavigationComponent, ProfileComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
