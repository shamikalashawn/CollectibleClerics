import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CardService } from '../services/card.service';
import { User } from '../data/user';
import { Card } from '../data/card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  filter: Card = new Card();
  cards: Array<Card> = [];
  users: Array<User> = [];
  currentUser;

  constructor(private _user: UserService, private _card: CardService, private _router: Router) { }

  ngOnInit() {
    this.filter.name = "James H. Cone";
    this._user.getCurrentUser()
      .then(user => {
        this.currentUser = user;
      })
      .catch(error => {
        this.currentUser = false;
        console.log('error getting current user: ', error)})
    
    this._card.showAllCards()
      .then(cards => {
        console.log('all cards retrieved: ', cards);
        this.cards = cards;
      })
      .catch(error => console.log('error showing all cards: ', error))
    
    this._user.showAll()
      .then(users => {
        console.log('all users retrieved: ', users);
        this.users = users;
      })
      .catch(error => console.log('error showing all users: ', error))
  }

  logout(){
    console.log('logging out');
    // this._router.navigate(['/logoutUser']);
    this._user.logoutUser()
      .then(() => {
        this._router.navigate(['/']);
      })    
      .catch(error => console.log('error logging out: ', error))
  }

}
