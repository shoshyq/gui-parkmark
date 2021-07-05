import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcComponent } from './components/exc/exc.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddPaymdetailsComponent} from './components/add-paymdetails/add-paymdetails.component'
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AddImidSearchComponent } from './components/add-imid-search/add-imid-search.component';
import { MainComponent } from './components/main/main.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { UpdatePaymentDetailsComponent } from './components/update-payment-details/update-payment-details.component';
import { AddPaymentDetailsComponent } from './components/add-payment-details/add-payment-details.component';
import { UpdateUserDetailsComponent } from './components/update-user-details/update-user-details.component';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';
import { AddRegularSearchComponent } from './components/add-regular-search/add-regular-search.component';
import { UpdateRegularSearchComponent } from './components/update-regular-search/update-regular-search.component';
import {AddScheduleComponent} from './components/add-schedule/add-schedule.component';
const routes: Routes = [
  { path: 'LogIn', component:  LogInComponent},
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Exc', component: ExcComponent },
  { path:'Home', component : HomeComponent} ,
  { path:'PaymentDetails', component : AddPaymdetailsComponent,children:[
  ]} ,
  { path:'Main/:ucode', component : MainComponent,pathMatch:'full'} ,
  { path:'ImmidSearch/:ucode', component: AddImidSearchComponent,pathMatch:'full' },
   { path:'Dashboard/:ucode', component: DashboardComponent,pathMatch:'full' , children: [ { path: 'FeedbackDetails', component:  FeedbackDetailsComponent} ]},
  { path: 'SearchResults', component: SearchResultsComponent },
  { path: 'UpdatePaymentDetails', component:  UpdatePaymentDetailsComponent},
  { path: 'AddPaymentDetails', component: AddPaymentDetailsComponent },
  { path: 'UpdateUserDetails', component: UpdateUserDetailsComponent },
 
  { path: 'AddRegularSearch/:ucode', component: AddRegularSearchComponent,pathMatch:'full',children: [ 
    { path: 'AddSchedule', component:  AddScheduleComponent} ]},
  { path: 'UpdateRegularSearch', component: UpdateRegularSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
