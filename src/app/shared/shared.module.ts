import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, SearchComponent],
  exports: [HeaderComponent, SearchComponent]
})

export class SharedModule {}