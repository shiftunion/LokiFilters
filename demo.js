
var db = new loki('sandbox.db');

var coll = db.addCollection('responses');


responses.forEach(function(item){
    coll.insert(item);
  });








