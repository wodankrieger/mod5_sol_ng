(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  
  var user_info = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function (short_name) {
    if (short_name)
      return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
        return response.data;
      });
  };

  service.saveUser = function (user) {
    if (user)
      user_info = user;
  };

  service.getUserInfo = function () {
    if (user_info)
      return user_info;
  };

}



})();
