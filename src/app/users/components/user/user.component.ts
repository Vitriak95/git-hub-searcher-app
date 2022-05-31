import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../../../shared/types/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('user') userProps: UserInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
