(function () {
    'use strict'

    var controllerId = "ProductListCtrl";

    angular.module("productManagement").controller(controllerId,
        ["productResource", ProductListCtrl]);

    // create controller
    function ProductListCtrl(productResource){
        var vm = this;

        productResource.query(function(data){
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }

    }

})();
