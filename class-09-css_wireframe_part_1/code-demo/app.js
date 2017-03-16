'use strict';

function Tweet(text){
  this.text = text;
  this.render = function(){
    var articleContainer = document.getElementById('tweet-form');

    var article = document.createElement('article');
    article.className = 'posted-tweet';
    articleContainer.insertAdjacentElement('afterend', article);
    // articleContainer.appendChild(article);

    var faceDiv = document.createElement('div');
    faceDiv.className = 'face';
    article.appendChild(faceDiv);

    var faceImg = document.createElement('img');
    faceImg.setAttribute('src', 'http://placehold.it/48x48');
    faceDiv.appendChild(faceImg);

    var tweetBody = document.createElement('div');
    tweetBody.className = 'tweet-body';
    article.appendChild(tweetBody);

    var nameP = document.createElement('p');
    nameP.className = 'name';
    nameP.innerText = 'Boaty McBoatface ';
    tweetBody.appendChild(nameP);

    var usernameSpan = document.createElement('span');
    usernameSpan.className = 'username';
    usernameSpan.innerText = '@boatboat';
    nameP.appendChild(usernameSpan);

    var tweetMsg = document.createElement('p');
    tweetMsg.className = 'tweet-msg';
    tweetMsg.innerText = this.text;
    tweetBody.appendChild(tweetMsg);
  };
  this.render();
};

function submitTweet(event){
  event.preventDefault();
  var tweetText = this.elements.tweet;
  var newTweet = new Tweet(tweetText.value);
  this.reset();
};
var form = document.getElementById('actual-form');
form.addEventListener('submit', submitTweet);
