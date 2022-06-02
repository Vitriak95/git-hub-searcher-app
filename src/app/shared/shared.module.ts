import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import {UtilsService} from './services/utils.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, SearchComponent],
  providers: [UtilsService],
  exports: [HeaderComponent, SearchComponent]
})

export class SharedModule {}
