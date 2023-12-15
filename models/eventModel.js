const nedb = require("gray-nedb");

class Event {
  constructor(filename) {
    this.db = new nedb({ filename: filename, autoload: true });
  }

  init() {
    return new Promise((resolve, reject) => {
      this.db.insert(
        {
          title: "Test Event",
          description: "This is a test event",
          date: "2019-01-01",
          start: "10AM",
          end: "2PM",
          category: "Professional",
          imageUrl: "https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/5f240c8bdba110417db1ea17_wearedevelopersworldcongress.jpg",
          venue: "Cocktail Bar",
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

  create(event) {
    return new Promise((resolve, reject) => {
      this.db.insert(event, (err, newDoc) => {
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
      this.db.find({ _id: id }, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  update(id, event) {
    return new Promise((resolve, reject) => {
      this.db.update({ _id: id }, event, {}, (err, numReplaced) => {
        if (err) {
          reject(err);
        } else {
          resolve(numReplaced);
        }
      });
    });
  }
}

module.exports = Event;
