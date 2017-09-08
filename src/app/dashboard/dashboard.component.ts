import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { UserService } from '../services/user.service';
import { Card } from '../data/card';
import { User } from '../data/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newCard = new Card();
  editedCard = new Card();
  editedUser = new User();
  cards: Array<Card> = [];
  users: Array<User> = [];
  pw_conf: string;
  currentUser = new User();
  registerUser = new User();

  constructor(private _router: Router, private _card: CardService, private _user: UserService) { }

  ngOnInit() {
    console.log('in ngonit');
    this._user.getCurrentUser()
    .then(user => {
      this.currentUser = user;
      console.log('current user id: ', this.currentUser._id)
    })
    .catch(error => console.log('error getting current user: ', error))

    this._user.showAll()
      .then(users => {
        console.log('******users have been retrieved: ', users);
        this.users = users;
      })
      .catch(error => console.log('error showing all users: ', error));
    this._card.showAllCards()
      .then(cards => {
        console.log('all cards retrieved: ', cards);
        this.cards = cards;
      })
      .catch(error => console.log('error showing all cards: ', error));
  }

  submitRegister(user){
    console.log('logReg component sending registration info: ', user);
    this._user.register(user)
      .then(user => {
        this.registerUser = new User();
        this.pw_conf = "";
      })
      .then(() => {
        this._user.showAll()
          .then(users => {
            console.log('******users have been retrieved: ', users);
            this.users = users;
          })
          .catch(error => console.log('error showing all users: ', error));
      })
      .then(() => {
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;
          })
          .catch(error => console.log('error showing all cards: ', error));
      })
      .catch(error => {
        console.log('error registering user from logReg component: ', error);
      })
  }

  createCard(form){
    console.log('FORM VALUE: ', form.value);
    this.newCard = form.value;
    console.log('card from form: ', this.newCard);
    // form.value.users.forEach(collectorID => {
    //   this.newCard.collectors.push(collectorID);
    // });
    // console.log('card with collectors pushed: ', this.newCard);
    this._card.createCard(this.newCard)
      .then(card => {
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;            
          })
          .catch(error => console.log('error showing all cards: ', error))
        form.reset();
        this.newCard = new Card();
      })
      .catch(error => console.log('error creating new card: ', error));
  }

  updateCard(form){
    console.log('FORM VALUE: ', form.value);
    console.log('edited card from form: ', this.editedCard);
    this._card.editCard(this.editedCard)
      .then(card => {
        // this.editedCard = new Card();
        form.reset();
      })
      .then(() => {
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;            
          })
          .catch(error => console.log('error showing all cards: ', error))
      })
      .catch(error => console.log('error updating new card: ', error));
  }

  updateUser(form, event){
    event.preventDefault();
    console.log('FORM VALUE: ', form.value);
    console.log('edited user from form: ', this.editedUser);
    this._user.edit(this.editedUser)
      .then(user => {
        this.editedUser = new User();
        form.reset();
      })
      .then(() => {
        this._user.showAll()
          .then(users => {
            console.log('all users retrieved: ', users);
            this.users = users;            
          })
          .catch(error => console.log('error showing all users: ', error))
      })
      .catch(error => console.log('error updating new user: ', error));
  }

  editCardTemplate(card){
    this.editedCard = card;
  }

  editUserTemplate(user){
    this.editedUser = user;
  }

  deleteCard(cardID){
    this._card.deleteCard(cardID)
      .then(() => {
        console.log('card successfully deleted');
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;
          })
          .catch(error => console.log('error showing all cards: ', error));
      })
      .catch(error => console.log('error deleting card: ', error))
  }

  deleteUser(userID){
    console.log('deleting user: ', userID);
    this._user.deleteUser(userID)
      .then(() => {
        console.log('user successfully deleted');
        this._user.showAll()
          .then(users => {
            console.log('all cards retrieved: ', users);
            this.users = users;
          })
          .catch(error => console.log('error showing all cards: ', error));
      })
      .then(() => {
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;
          })
          .catch(error => console.log('error showing all cards: ', error));  
      })
      .catch(error => console.log('error deleting card: ', error))
  }

  addCollectorToCard(form){
    console.log('adding collector ', form.value.collector);
    console.log('to card ', this.editedCard);
    this._card.addCollector(this.editedCard, form.value.collector)
      .then(() => {
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;
            this.editedUser = new User();
            form.reset;
          })
          .catch(error => console.log('error showing all cards: ', error));
      })
      .then(() => {
        this._user.showAll()
          .then(users => {
            console.log('users retrieved: ', users);
            this.users = users;
          })
          .catch(error => console.log('error showing all users: ', error));
      })
      .catch(error => console.log('error showing all cards: ', error))
  }

  deleteCollector(card, collector){
    this._card.removeCollector(card, collector)
      .then(() => {
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;
          })
          .catch(error => console.log('error showing all cards: ', error));
      })
      .then(() => {
        this._user.showAll()
          .then(users => {
            console.log('users retrieved: ', users);
            this.users = users;
          })
          .catch(error => console.log('error showing all users: ', error));
      })
      .catch(error => console.log('error removing collector from card: ', error))
  }

  deleteCardCollection(user, card){
    this._user.deleteCard(user, card)
      .then(() => {
        this._card.showAllCards()
          .then(cards => {
            console.log('all cards retrieved: ', cards);
            this.cards = cards;
          })
          .catch(error => console.log('error showing all cards: ', error));
      })
      .then(() => {
        this._user.showAll()
          .then(users => {
            console.log('users retrieved: ', users);
            this.users = users;
          })
          .catch(error => console.log('error showing all users: ', error));
      })
      .catch(error => console.log('error deleting card from collection: ', error));
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
