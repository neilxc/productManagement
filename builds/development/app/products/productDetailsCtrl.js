/**
 * Created by neil on 28/04/15.
 */
(function () {
    'use strict';

    angular.module("productManagement").controller("ProductDetailsCtrl",ProductDetailsCtrl);

    function ProductDetailsCtrl(){
        var vm = this;

        vm.product = product;
        vm.title = "Product Detail: " + vm.product.productName;

        if(vm.product.tags){
            vm.product.tagList = vm.product.tags.toString();
        }
    }
})();