import express from "express"
const router = express.Router()
import User from "../models/user.model.js";

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(User => res.json(User))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json(`${username} was added!`))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router