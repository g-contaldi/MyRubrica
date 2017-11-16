import {Component} from '@angular/core';
import {ContactService} from "../providers/contact.service";
import {Contact} from "../model/contact";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {

  listContact: Array<Contact> = new Array();
  selected: Contact = new Contact();

  constructor(private contactService: ContactService) {
    this.getList();
  }

  getList() {
    this.contactService.getListContact().subscribe(data => {
      this.listContact = data;
      console.log(this.listContact);
    })
  }


  selectedItem(c) {
    this.selected = c;
  }

}
