import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CardService } from '../services/card.service';
import { User } from '../data/user';
import { Card } from '../data/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  currentUser: User = new User();
  card: Card = new Card();
  cardID: string;
  userCards: Array<Card> = [];
  userCardIDs: Array<string> = [];

  constructor(private _router: Router, private _route: ActivatedRoute, private _user: UserService, private _card: CardService) {
    this._route.params.subscribe(param => {
      console.log('param: ', param);
      this.cardID = param.id;
      console.log('card  id: ', this.cardID);
    })
   }

  ngOnInit() {
    this._user.getCurrentUser()
      .then(user => {
        this.currentUser = user;
        this.userCards = user.cardCollection;
        this.userCardIDs = this.userCards.map(function(e) {return e._id});        
      })
      .catch(error => console.log('error getting current user: ', error))

    this._card.showOneCard(this.cardID)
      .then(card => {
        this.card = card;
      })
      .catch(error => console.log('error showing card: ', error))
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
        .then(() => {
          this._card.showOneCard(card._id)
            .then(oneCard => {
              this.card = oneCard;
              this.cardID = this.card._id;
            })
            .catch(error => console.log('error showing card: ', error))
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
      .then(() => {
        this._card.showOneCard(card._id)
          .then(oneCard => {
            this.card = oneCard;
            this.cardID = this.card._id;
          })
          .catch(error => console.log('error showing one card: ', error))
      })
      .catch(error => console.log('error removing collector from card: ', error))
}

}
