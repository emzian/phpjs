var assert = require("assert");
var Tweet  = require("../lib/tweet");

describe('getJSON Method', function() {
  var  json;

  beforeEach(function(){
    json = Tweet.prototype.getJSON.call({id:1});
  });

  it("should return a JSON encoded object" , function(){
    assert.equal(typeof json , "string");
    assert.equal(typeof json , "object");
  });

  it("should do the calculations correctly", function(){

    assert(json.retweets >= 0 && json.retweets < 100 );
    assert.equal(json.ago, " 5 minutes ago 1");

  });


});
