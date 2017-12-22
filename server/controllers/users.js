const User = require('mongoose').model('User');
const Card = require('mongoose').model('Card');

module.exports = {
    register(request, response) {
        console.log('in server registering user: ', request.body);
        User.findOne({
          $or: [
            {"email": request.body.email},
            {"username": request.body.username}
          ]
        })
          .then(user => {
            if (user) {
              newError = new Error("Please register with an alternate email or username.");
              console.log('registration failed due to user email or username duplication.');
              response.status(401).json(newError);
          }
            else {
              User.create(request.body)
                  .then(user => {
                      console.log('successfully created user: ', user);
                      request.session.user = user.toObject();
                      response.json(user);
                  })
                  .catch(error => {
                      // response.status(401).json(Object.keys(error.errors).map(key => error.errors[key].message));
                      console.log('error registering user: ', error);
                      response.status(401).json(error);
                  })
            }
          })
          .catch(error => {
            console.log("error registering user: ", error)
            response.status(401).json(error);
          })
    },
    login(request, response) {
        // User.find({})
        //     .then(users => console.log('all users: ', users))
        //     .catch(error => console.log('error finding all users: ', error))
        User.findOne({ "email": request.body.email })
            .then(user => {
                console.log('user found: ', user);
                if (!user) throw new Error("user not found");
                if (User.validatePassword(request.body.password, user.password)) {
                  request.session.user = user.toObject();
                  response.json(user);
                }
                else {
                  throw new Error ("error logging in user")
                }
            })
            .catch(error => {
              console.log('error logging in user: ', error)
              response.status(401).json(error);
            });
    },
    logout(request, response) {
        console.log('logging out from server');
        request.session.destroy();
        response.redirect('/');
    },
    logoutUser(request, response) {
        console.log('logging out user from server');
        request.session.destroy();
        response.json(true);
    },
    showOne(request, response) {
        User.findById(request.params.id).populate('cardCollection')
            .then(user => {
                if (!user) throw new Error();
                response.json(user);
            })
            .catch(error => console.log('error getting user by id: ', error));

    },
    getCurrentUser(request, response) {
        if ("user" in request.session) {
            User.findById(request.session.user._id).populate('cardCollection')
                .then(user => {
                    if (!user) throw new Error();
                    console.log('current user found');
                    response.json(user);
                })
                .catch(error => console.log('error getting user by id: ', error));
        } else {
            console.log('request.session: ', request.session);
            throw new Error("user not in request.session");
        }

    },
    showAll(request, response) {
        User.find({}).populate('cardCollection')
            .then(users => {
                if (!users) throw new Error('no users found');
                response.json(users)
            })
            .catch(error => {
                console.log('error showing all users: ', error);
            })
    },
    edit(request, response) {
        User.findByIdAndUpdate(request.session.user._id, request.body, { "new": true }).populate('cardCollection')
            .then(user => {
                response.json(user);
            })
            .catch(error => console.log('error updating user: ', error));
    },
    removeCard(request, response) {
        User.findByIdAndUpdate(request.params.id, { "$pull": { "cardCollection": request.body.cardID } }, { "new": true }).populate('cardCollection')
            .then(user => {
                Card.findByIdAndUpdate(request.body.cardID, { "$pull": { "collectors": request.params.id } }, { "new": true })
                    .then(card => console.log('card collectors updated ', card))
                    .catch(error => console.log('error removing collector from card: ', error))
                console.log('user after removing card: ', user);
                response.json(user);
            })
            .catch(error => console.log('error removing card: ', error));
    },
    destroy(request, response) {
        User.findById(request.params.id)
            .then(user => {
                user.cardCollection.forEach(cardID => {
                    Card.findByIdAndUpdate(cardID, { "$pull": { "collectors": user._id } }, { "new": true })
                        .then(card => console.log('card collectors updated ', card))
                        .catch(error => console.log('error removing collector from card: ', error))
                })
            })
            .then(() => {
                return User.findByIdAndRemove(request.params.id)
                    .then(user => response.json(user))
            })
            .catch(error => console.log('error deleting user: ', error));

    },
}
