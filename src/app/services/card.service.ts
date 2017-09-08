import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardService {

    constructor(private _http: Http){}

    createCard(card){
        console.log('in card service to create card: ', card);
        return this._http.post('/cards', card)
        .map(data => data.json())
        .toPromise();
    }
    
    editCard(card){
        return this._http.put(`/cards/${card._id}`, card)
        .map(data => data.json())
        .toPromise();
    }

    showOneCard(cardID){
        return this._http.get(`/cards/${cardID}`)
        .map(data => data.json())
        .toPromise();
    }

    showAllCards(){
        return this._http.get('/cards')
        .map(data => data.json())
        .toPromise();
    }

    showCardPack(pack){
        return this._http.get(`cards/pack/${pack}`)
        .map(data => data.json())
        .toPromise();
    }

    deleteCard(card){
        return this._http.delete(`/cards/${card._id}`)
        .map(data => data.json())
        .toPromise();
    }

    addCollector(card, collectorID){
        console.log('adding collector to card: ', collectorID, card);
        return this._http.put(`/cards/add/${card._id}`, {collectorID: collectorID})
        .map(data => data.json())
        .toPromise();
    }

    removeCollector(card, collector){
        console.log('CARD SERVER in remove collector method: ', card, collector)
        return this._http.post(`/cards/remove/${card._id}`, {collectorID: collector._id})
        .map(data => data.json())
        .toPromise();
    }

}