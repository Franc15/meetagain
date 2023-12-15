const nedb = require("gray-nedb");

class User {
  constructor(filename) {
    this.db = new nedb({ filename: filename, autoload: true });
  }

    init() {
        return new Promise((resolve, reject) => {
        this.db.insert(
            {
            username: "user1",
            email: "user1@game.co",
            password: "user1",
            firstname: "User",
            lastname: "One",
            address: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            phone: "123-456-7890",
            role: "user",
            },
            (err, newDoc) => {
            if (err) {
                reject(err);
            } else {
                resolve(newDoc);
            }
            }
        );
        });
    }

    all() {
        return new Promise((resolve, reject) => {
        this.db.find({}, (err, docs) => {
            if (err) {
            reject(err);
            } else {
            resolve(docs);
            }
        });
        });
    }

    create(user) {
        return new Promise((resolve, reject) => {
        this.db.insert(user, (err, newDoc) => {
            if (err) {
            reject(err);
            } else {
            resolve(newDoc);
            }
        });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
        this.db.remove({ _id: id }, {}, (err, numRemoved) => {
            if (err) {
            reject(err);
            } else {
            resolve(numRemoved);
            }
        });
        });
    }

    find(id) {
        return new Promise((resolve, reject) => {
        this.db.findOne({ _id: id }, (err, docs) => {
            if (err) {
            reject(err);
            } else {
            resolve(docs);
            }
        });
        });
    }

    findByEmail(email) {
        return new Promise((resolve, reject) => {
        this.db.findOne({ email: email }, (err, docs) => {
            if (err) {
            reject(err);
            } else {
            resolve(docs);
            }
        });
        });
    }

    update(id, user) {
        return new Promise((resolve, reject) => {
        this.db.update({ _id: id }, user, {}, (err, numReplaced) => {
            if (err) {
            reject(err);
            } else {
            resolve(numReplaced);
            }
        });
        });
    }

}

module.exports = User;