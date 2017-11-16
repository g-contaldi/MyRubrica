import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../providers/contact.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  title: string = 'Aggiungi contatto';
  contact: Contact = new Contact();
  titleB = 'Attenzione!';
  message = 'Vuoi davvero eliminare il contatto?';
  id: number;

  constructor(private contactService: ContactService, private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getContact();
  }

  saveOrUpdateContact() {
    this.contactService.saveOrUpdateContact(this.contact);
    console.log(this.contact);
    this.contact = new Contact();
    this.location.back();
  }

  getContact() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(this.id).subscribe(data => {
      if (this.id !== 0) {
        this.title = 'Modifica contatto';
        this.contact = data;
        this.message = 'Vuoi davvero eliminare ' + this.contact.nome + ' ' + this.contact.cognome + '?';
      }
    })
  }

  deleteContact(contact) {
    this.contactService.deleteContact(contact);
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

}
