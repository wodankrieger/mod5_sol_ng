(function () {
"use strict";


angular.module('public')
    .controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'ApiPath'];
function SignUpController(MenuService, ApiPath) {
    var $ctrl = this;

    $ctrl.basePath = ApiPath;

    $ctrl.submit = function () {
        MenuService.getMenuItem($ctrl.user.menu_item).then(function(data){
            $ctrl.completed = true;
            $ctrl.menu = data;
        });
        MenuService.saveUser($ctrl);
    };
}
})();
