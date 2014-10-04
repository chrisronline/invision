(function() {
  'use strict';

  function getDashboardRoute(page) {
    return {
      templateUrl: 'components/dashboard/dashboard.html',
      controller: 'DashboardCtrl',
      resolve: {
        posts: function(PostService) {
          return PostService.getPosts();
        },
        page: function() {
          return page;
        }
      }
    };
  }

  function DashboardConfig($routeProvider) {
    $routeProvider
      .when('/dashboard', {redirectTo: '/dashboard/all' })
      .when('/dashboard/all', getDashboardRoute('all'))
      .when('/dashboard/photos', getDashboardRoute('photos'))
      .when('/dashboard/videos', getDashboardRoute('videos'));
  }

  function DashboardCtrl($scope, posts, page) {
    $scope.page = page;
    $scope.posts = posts;
    $scope.photos = _.filter(posts, function(post) {
      return _.has(post, 'image');
    });
    $scope.videos = _.filter(posts, function(post) {
      return _.has(post, 'video');
    });
  }

  angular.module('invision')
    .config(DashboardConfig)
    .controller('DashboardCtrl', DashboardCtrl);
})(angular);