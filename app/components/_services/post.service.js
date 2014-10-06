(function() {
  'use strict';

  function PostService(RestService) {
    var service = {};

    function formatPost(post) {
      // Valid handle characters: https://support.twitter.com/articles/101299-why-can-t-i-register-certain-usernames
      post.message = post.message.replace(/@[A-Za-z0-9_]+/, function(match) {
        return '<a href="http://www.twitter.com/' + match + '">' + match + '</a>';
      });
      post.message = post.message.replace(/#[\S]+/, function(match) {
        return '<a href="http://www.twitter.com/hashtag/' + match.substring(1) + '">' + match + '</a>';
      });
      return post;
    }

    service.getPosts = function() {
      return RestService.get('data/posts.json')
        .then(function(posts) {
          return _.map(posts, formatPost);
        });
    };

    return service;
  }

  angular.module('invision')
    .factory('PostService', PostService);
})(angular);