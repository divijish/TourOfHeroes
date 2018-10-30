import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(public messageService: MessageService) {// Here messageService is public because
    // Angular only binds to public component properties.


  }

  ngOnInit() {
  }

}
