import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CardService } from '../services/card.service';
import { User } from '../data/user';
import { Card } from '../data/card';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cards: Array<Card> = [];
  pageUser: User = new User();
  pageUserCards: Array<Card> = [];
  pageUserID: string;
  currentUser: User = new User();
  filter: Card = new Card();

  constructor(private _route: ActivatedRoute, private _router: Router, private _user: UserService, private _card: CardService) {
    this._route.params.subscribe(param => {
      console.log('param: ', param);
      this.pageUserID = param.id;
      console.log('page user id: ', this.pageUserID);
    })
    this._user.getCurrentUser()
      .then(user => {
        this.currentUser = user;
      })
      .catch(error => console.log('error getting current user: ', error))

    this._user.show(this.pageUserID)
      .then(user => {
        this.pageUser = user;
        this.pageUserCards = user.cardCollection;
        console.log('userCards: ', this.pageUserCards);
      })
      .catch(error => console.log('error getting current user: ', error))
  }

  ngOnInit() {
  }

  removeCard(card){
    this._card.removeCollector(card, this.currentUser)
      .then(() => {
        this._user.show(this.pageUserID)
        .then(user => {
          this.pageUser = user;
          this.pageUserCards = user.cardCollection;
          console.log('userCards: ', this.pageUserCards);
        })
        .catch(error => console.log('error getting current user: ', error))  
      })
      .catch(error => console.log('error removing card from collection: ', error))
  }

  logout(){
    console.log('logging out');
    // this._router.navigate(['/logout']);
    this._user.logoutUser()
      .then(() => {
        this._router.navigate(['/']);
      })    
      .catch(error => console.log('error logging out: ', error))
  }
}
