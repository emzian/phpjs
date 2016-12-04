var Tweet = function(){

};

Tweet.prototype.getJSON = function(){
  this.ago = " 5 minutes ago " + this.id;
  this.retweets = Math.floor(Math.random()*100);

  return this;  
};

module.exports = Tweet;
