
function greeter(greeting , punc){
  punc = punc || "!"
  return function (sender) {
    return sender.trim() + " says " + greeting.trim() + punc.trim();
  };
}

module.exports = greeter;
