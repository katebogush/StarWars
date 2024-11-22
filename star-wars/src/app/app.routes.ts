import { Routes } from '@angular/router';
import {MoviesComponent} from '../movies/movies.component';
import {MoviesDetailsComponent} from '../movies-details/movies-details.component';

export const routes: Routes = [
    {path: '', component: MoviesComponent },
    {path: 'movie/:id', component: MoviesDetailsComponent},

    {path: '**', redirectTo:'', component: MoviesComponent}
];
