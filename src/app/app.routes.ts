import { Routes } from '@angular/router';
import { LandingPageComponent } from '@/components/landing-page/landing-page.component';
import { ErrorComponent } from './components/error/error.component';
import { RickmortyComponent } from '@/components/rickmorty/rickmorty.component';

import { authRoutes } from './routes/auth.routes';
import { AuthGuard } from './guards/auth/auth.guard';

const appTitle = "RickMortyApp";

export const routes: Routes = [
  {
    path: "",
    title: `Accueil - ${appTitle}`,
    pathMatch: "full",
    loadComponent: () => import("@/components/landing-page/landing-page.component").then(m => m.LandingPageComponent)
  },
  {
    path:"rickmorty",
    title: `List des personnages - ${appTitle}`,
    // canActivate: [AuthGuard],
    loadComponent: () => import("@/components/rickmorty-list/rickmorty-list.component").then(m => m.RickmortyListComponent)
  },
  {
    path:"rickmorty/:id",
    title: `Details du personnage - ${appTitle}`,
    // canActivate: [AuthGuard],
    loadComponent: () => import("@/components/rickmorty/rickmorty.component").then(m => m.RickmortyComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./routes/auth.routes").then(m => m.authRoutes)
  },
  {
    path:"erreur/404",
    title: `Erreur 404 - ${appTitle}`,
    loadComponent: () => import("@/components/error/error.component").then(m => m.ErrorComponent)
  },
  {
    path:"**",
    redirectTo: "erreur/404"
  }
];
