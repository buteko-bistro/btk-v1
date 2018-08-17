import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsComponent } from './views/foods/foods.component';
import { DrinksComponent } from './views/drinks/drinks.component';
import { NewsComponent } from './views/news/news.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { UsComponent } from './views/us/us.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'foods', pathMatch: 'full' },
  { path: 'foods', component: FoodsComponent, data: { state: 'foods' } },
  { path: 'drinks', component: DrinksComponent, data: { state: 'drinks' } },
  { path: 'news', component: NewsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'us', component: UsComponent },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  // { path: '**', component: NotFound }
];

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: true
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
