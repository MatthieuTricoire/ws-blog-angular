import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './guards/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { roleGuard } from './guards/role.guard';
import { visitorOnlyGuard } from './guards/visitor.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },

  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [roleGuard('admin')]
  },
  {
    path: 'article/create',
    component: CreateArticlePageComponent,
  },
  {
    path: 'article/:id',
    component: ArticlePageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [visitorOnlyGuard]
  },
  {
    path: 'profil',
    component: ProfilePageComponent,
    canActivate: [authGuard]
  }, {
    path: '**',
    component: NotFoundPageComponent,
  },
];
