var Product = {};

Product.getListOfLevel0 = {
    method: 'GET',
    path: '/api/products',
    config: {
        handler: function (request, reply) {
            return reply({ code: 'OK', data: [
                        'Appliances','Auto Parts','Babies & Kids','Books','Cameras','Clothing',
                        'Computers','Electronics','Flowers & Gifts',
                        'Furniture','Grocery & Gourmet','Health & Beauty','Home Improvement','Indoor Living',
                        'Industrial Supply','Jewelry & Watches','Magazines','Movies','Music',
                        'Musical Instruments','Office','Pets','Software','Sporting Goods','Toys','Video Games'] });
        }
    }
};

Product.getProductsLevelZero = {
    method: 'GET',
    path: '/api/products/{level0}',
    config: {
        handler: function (request, reply) {
            var level0 = request.params.level0 || 'unknown';
            return reply({ code: 'OK', data: [{id: 1, name: '1'},{id: 2, name: '2'}], level0: level0 });
        }
    }
};

Product.getProductsLevelOne = {
    method: 'GET',
    path: '/api/products/{level0}/{level1}',
    config: {
        handler: function (request, reply) {
            var level0 = request.params.level0 || 'unknown';
            var level1 = request.params.level1 || 'unknown';
            return reply({ code: 'OK', data: [{id: 1, name: '1'},{id: 2, name: '2'}], level0: level0, level1: level1 });
        }
    }
};

Product.getProductsLevelTwo = {
    method: 'GET',
    path: '/api/products/{level0}/{level1}/{level2}',
    config: {
        handler: function (request, reply) {
            var level0 = request.params.level0 || 'unknown';
            var level1 = request.params.level1 || 'unknown';
            var level2 = request.params.level2 || 'unknown';
            return reply({ code: 'OK', data: [{id: 1, name: '1'},{id: 2, name: '2'}], level0: level0, level1: level1, level2: level2 });
        }
    }
};

Product.getProductById = {
    method: 'GET',
    path: '/api/products/id/{product_id}',
    config: {
        handler: function (request, reply) {
            return reply({ code: 'OK', data: {id: 1, name: 'product name'}});
        }
    }
};

module.exports = Product;