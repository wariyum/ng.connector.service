var wrConnector = angular.module('wrConnector', []);;(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:homeService
     * @description
     * # homeService
     * Service of the app
     */

    angular.module('wrConnector')
        .service('appService', appService);

    appService.$inject = ['appConstants'];

    function appService(appConstants) {
        return {
            getUrl: getUrl,
            getUrlImg:getUrlImg
        };

        function getUrl() {
            if(appConstants.mode === 'dev')
            {
                return appConstants.url_dev;
            } 
            else if(appConstants.mode === 'stg')
            {
                return appConstants.url_stg;
            }
            else if(appConstants.mode === 'prd')
            {
                return appConstants.url_prd;
            }
        }

        function getUrlImg() {
         if(appConstants.mode === 'dev')
            {
                return appConstants.url_dev_img;
            } 
            else if(appConstants.mode === 'stg')
            {
                return appConstants.url_stg_img;
            }
            else if(appConstants.mode === 'prd')
            {
                return appConstants.url_prd_img;
            }   
        }

    }

})();;(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:homeService
     * @description
     * # homeService
     * Service of the app
     */

    angular.module('wrConnector')
        .service('categoryService', categoryService);

    categoryService.$inject = ['$http','appService','appConstants'];

    function categoryService($http,appService,appConstants) {
        return {
           getCategories:getCategories,
           test:test
        };

        function getCategories(categoryId) {
            if(appConstants.mode === 'dev')
                return $http.get(appService.getUrl()+'categories-list.json');
            else{
                return $http.get(appService.getUrl() +'connector/'+ appConstants.prog_id+'/categories');
            }
        }
        function test() {
            alert('test method');
        }
    }

})();;(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:homeService
     * @description
     * # homeService
     * Service of the app
     */

    angular.module('wrConnector')
        .service('productService', productService);

    productService.$inject = ['$http','appService','appConstants','$state'];

    function productService($http,appService,appConstants,$state) {
        return {
            getProductsPublished: getProductsPublished,
            getProductsByCategoryId: getProductsByCategoryId,
            getProductDetailsPublished: getProductDetailsPublished
        };

        function getProductsByCategoryId(categoryId) {
              if(appConstants.mode === 'dev')
                return $http.get(appService.getUrl()+'products-by-categoryId.json');       
            else
                return $http.get(appService.getUrl()+'connector/'+ appConstants.prog_id +'/categories/'+ categoryId+'/products');     
        }

        function getProductsPublished() {
            if(appConstants.mode === 'dev')
                return $http.get(appService.getUrl()+'published-products.json');
            else
                return $http.get(appService.getUrl() +'connector/'+ appConstants.prog_id + '/published');
        }

        function getProductDetailsPublished(productId) {
            if(appConstants.mode === 'dev')
                return $http.get(appService.getUrl()+'published-products.json');
            else
                return $http.get(appService.getUrl() +'connector/'+ appConstants.prog_id + '/product/' + productId);
        }

    }

})();