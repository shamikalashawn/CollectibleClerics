import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  constructor(private _http: Http) { }

  register(user){
    console.log('in user service sending user to be registered: ', user);
    return this._http.post('/register', user)
    .map(data => data.json())
    .toPromise();
  }

  login(user){
    return this._http.post('/login', user)
    .map(data => data.json())
    .toPromise();
  }

  logoutUser(){
    return this._http.get('/logoutUser')
    .map(data => data.json())
    .toPromise();
  }

  show(userID){
    return this._http.get(`/users/${userID}`)
    .map(data => data.json())
    .toPromise();
  }

  showAll(){
        return this._http.get('/users')
        .map(data => data.json())
        .toPromise();
    }

  getCurrentUser(){
    return this._http.get('/user')
    .map(data => data.json())
    .toPromise();
  }

  edit(user){
    return this._http.put(`/users/${user._id}`, user)
    .map(data => data.json())
    .toPromise();
  }

  deleteUser(userID){
    return this._http.delete(`/users/${userID}`)
    .map(data => data.json())
    .toPromise();
  }

  deleteCard(user, card){
    return this._http.put(`/users/remove/${user._id}`, {cardID: card._id})
    .map(data => data.json())
    .toPromise();  
  }


}