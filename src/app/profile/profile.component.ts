import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CardService } from '../services/card.service';
import { User } from '../data/user';
import { Card } from '../data/card';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  filter: Card = new Card();
  cards: Array<Card> = [];
  users: Array<User> = [];
  userCards: Array<Card> = [];
  userCardIDs: Array<string> = [];
  currentUser: User = new User();

  constructor(private _user: UserService, private _card: CardService, private _router: Router) { }

  ngOnInit() {
    this._user.getCurrentUser()
      .then(user => {
        this.currentUser = user;
        this.userCards = user.cardCollection;
        console.log('userCards: ', this.userCards);
        this.userCardIDs = this.userCards.map(function(e) {return e._id});
      })
      .catch(error => console.log('error getting current user: ', error))
    
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

  collectCard(card){
    this._card.addCollector(card, this.currentUser._id)
      .then(() => {
        console.log('collector added to card');
        this._user.getCurrentUser()
        .then(user => {
          this.currentUser = user;
          this.userCards = user.cardCollection;
          this.userCardIDs = this.userCards.map(function(e) {return e._id});
        })
        .catch(error => console.log('error getting current user: ', error))
      })
      .catch(error => console.log('error adding collector to card: ', error))
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

  removeCard(card){
    this._card.removeCollector(card, this.currentUser)
      .then(() => {
        console.log('collector added to card');
        this._user.getCurrentUser()
          .then(user => {
            this.currentUser = user;
            this.userCards = user.cardCollection;
            this.userCardIDs = this.userCards.map(function(e) {return e._id});
          })
          .catch(error => console.log('error getting current user: ', error))
      })
      .catch(error => console.log('error removing collector from card: ', error))
  }
}
