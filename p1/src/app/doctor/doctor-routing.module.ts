import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard';
import { Patients } from './patients/patients';
import { Appointments } from './appointments/appointments';
import { Reports } from './reports/reports';
import { Prescriptions } from './prescriptions/prescriptions';

const routes: Routes = [
  { path: '', component: DoctorDashboardComponent }, // Default route
  { path: 'patients', component: Patients },
  { path: 'appointments', component: Appointments },
  { path: 'reports', component: Reports },
  { path: 'prescriptions', component: Prescriptions },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
