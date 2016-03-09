var app = angular.module('app', []);

app.controller('MainCtrl', function($scope,$http) {
	function getItems() {
		console.log('getItems()');
		$http.get('/api/items').success(function(items) {
// 			console.log('\titems = %o', items);
			$scope.items = items;
		}).error(function(err) {
			console.log('\tOpps!  Error!  %o', err);
		});
	}

	$scope.taxRate = 1.08517;
// 	$scope.items = [
// 		{id:1, text:'Frozen Pizza',	price:7.98,	quantity:1},
// 		{id:2, text:'Ice Cream',	price:5.63,	quantity:4},
// 		{id:3, text:'Peaches',		price:2.89,	quantity:2}
// 	];
// 	
// 	
// 	$scope.nextId = $scope.items.length + 1;
// 	
// 	
	$scope.addItem = function() {
		var newItem = {
			text:		$scope.itemEntry,
			price:		$scope.priceEntry,
			quantity:	$scope.quantityEntry
		};
		console.log('addItem()\t newItem=%o', newItem);
		$http.post('/api/new', newItem).success(function(items) {
			console.log('\titems = %o', items);
			getItems();
		});
		
		/*
		$scope.items.push();
		$scope.nextId++;*/
		$scope.priceEntry = 0;
		$scope.quantityEntry = 0;
		$scope.itemEntry = '';
	};

	$scope.buyItem = function(item) {
		item.bought = !item.bought;
	};

	$scope.deleteItem = function(item) {
		var index = $scope.items.indexOf(item);
		$scope.items.splice(index,1);
	};

	$scope.isItemBought = function(item) {
		return (item.bought) ? 'bought' : 'not-bought';
	}; 

	$scope.calcTotal = function() {
		var total = 0;
		for (i=0; i<$scope.items.length; i++){
			total+= $scope.items[i].price * $scope.items[i].quantity * $scope.taxRate;
		}

		return total;
	};

	getItems();
});
