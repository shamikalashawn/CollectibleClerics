const Card = require('mongoose').model('Card');
const User = require('mongoose').model('User');

module.exports = {
    create(request, response) {
        console.log('*****CREATING card in server with request.body: ', request.body);
        Card.create(request.body)
            .then(card => {
                console.log('*****card successfully created: ', card);
                response.json(card);
            })
            .catch(error => console.log('error creating card: ', error));
    },
    edit(request, response) {
        Card.findByIdAndUpdate(request.params.id, request.body, { new: true }).populate('collectors')
            .then(card => {
                console.log('*****edited card from server: ', card);
                response.json(card);
            })
            .catch(error => console.log('error editing card: ', error));
    },
    addCollector(request, response) {
        console.log('*****in server adding collector to card, here is collector ID: ', request.body.collectorID);
        Card.findByIdAndUpdate(request.params.id, { "$push": { 'collectors': request.body.collectorID } }, { "new": true })
            .then(card => {
                User.findByIdAndUpdate(request.body.collectorID, { "$push": { 'cardCollection': card._id } }, { "new": true })
                    .then(user => console.log("*****collector's card collection updated: ", user))
                    .catch(error => console.log("error updating user's card collection: ", error))
            })
            .then(() => {
                Card.findById(request.params.id).populate('collectors')
                    .then(updatedCard => response.json(updatedCard))
                    .catch(errror => console.log('error finding updated card: ', error))
            })
            .catch(error => console.log('error updating card: ', error))
    },
    removeCollector(request, response) {
        console.log('SERVER REMOVE COLLECTOR request.body._id: ', request.body.collectorID)
        Card.findByIdAndUpdate(request.params.id, { "$pull": { "collectors": request.body.collectorID } })
            .then(card => {
                User.findByIdAndUpdate(request.body.collectorID, { "$pull": { "cardCollection": request.params.id } }, { "new": true })
                    .then(user => console.log('*****user card collection updated: ', user))
                    .catch(error => console.log('error updating card collection of user: ', error));
                console.log('*****card after collector has been removed: ', card);
                response.json(card);
            })
            .catch(error => console.log('error finding and removing card collector from card: ', error))
    },
    showOne(request, response) {
        Card.findById(request.params.id).populate('collectors')
            .then(card => {
                if (!card) throw new Error();
                response.json(card);
            })
            .catch(error => console.log('error getting card by id: ', error));
    },
    showAll(request, response) {
        Card.find({}).populate('collectors')
            .then(cards => {
                console.log('*****cards found: ');
                response.json(cards);
            })
            .catch(error => console.log('error showing all cards: ', error));
    },
    showPack(request, response) {
        Card.find({ "theology": request.params.pack }).populate('collectors')
            .then(cards => {
                response.json(cards);
            })
            .catch(error => console.log('error showing pack: ', error));
    },
    destroy(request, response) {
        Card.findByIdAndRemove(request.params.id)
            .then(card => {
                response.json(card);
            })
            .catch(erro => console.log('error removing card: ', error));
    },
}