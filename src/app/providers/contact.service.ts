import {Injectable} from '@angular/core';
import {Contact} from "../model/contact";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class ContactService {

  listContact: Array<Contact> = new Array();

  constructor() {
    this.initList();
  }

  initList() {
    this.listContact = [
      {id: 1, nome: "Lucio", cognome: "Sestio", tel: "3205412487", mail: "lucio99@gmail.com"},
      {id: 2, nome: "Mimmo", cognome: "Caglio", tel: "3295301476", mail: "mimmocaglio@gmail.com"},
      {id: 3, nome: "Paolo", cognome: "Maldini", tel: "3407984563", mail: "poalino@gmail.com"},
      {id: 4, nome: "Toni", cognome: "Dallara", tel: "3354749521", mail: "toninumber1@gmail.com"}
    ]
  }

  getListContact(): Observable<Array<Contact>> {
    return of(this.listContact);
  }

  saveOrUpdateContact(contact) {
    if (this.listContact.includes(contact)) {
      let index = this.listContact.indexOf(contact);
      this.listContact.splice(index, 1);
      this.listContact.push(contact);
    } else {
      contact.id = this.listContact.length + 1;
      this.listContact.push(contact);
    }
    this.listContact.sort((a, b) => {
      return a.id - b.id;
    });
  }

  deleteContact(contact) {
    console.log("delete clicked")
    let index = this.listContact.indexOf(contact);
    this.listContact.splice(index, 1);
    for (let c of this.listContact) {
      c.id = this.listContact.indexOf(c) + 1;
    }
  }

  getContactById(id) {
    return of(this.listContact.find(c => c.id === id));
  }

  searchContact(term): Observable<Array<Contact>> {
    console.log(term)
    let searched: Array<Contact> = new Array();
    if (term !== "") {
      for (let c of this.listContact) {
        if (c.nome.toLowerCase().search(term) != -1 ||
          c.cognome.toLowerCase().search(term) != -1 ||
          c.tel.toLowerCase().search(term) != -1 ||
          c.mail.toLowerCase().search(term) != -1)
          searched.push(c);
      }
      console.log(searched)
      return of(searched);
    } else
      return of([]);
  }

}
