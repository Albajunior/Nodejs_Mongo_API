const User = mongoose.model('User', userSchema);
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// Créer un nouvel utilisateur
const newUser = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
});

  