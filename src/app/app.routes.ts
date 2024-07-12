import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { RegisterMovieComponent } from './components/list/register-movie/register-movie.component';

export const routes: Routes = [
    {
        path:"home",
        title: "Home",
        component: ListComponent
    },
    {
        path:"",
        redirectTo: "/home",
        pathMatch: 'full'
    },
    {
        path: "register-movie",
        title: "Register Movie",
        component: RegisterMovieComponent
    }
];
