var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
// 	$scope.taxNum = 8.517;
	$scope.items = [
		{id: 1, text: "Frozen Pizza",price:7.98,quantity:1,priceWtax:$scope.tax = function(price,quantity) {
			$scope.items.price = price;
			$scope.items.quantity = quantity;
			($scope.items.price * $scope.items.quantity)/**$scope.taxnum*/}, bought:true},
		{id: 2, text: "Ice Cream",price:5.63,quantity:4, priceWtax:$scope.tax = function(price,quantity) {
			($scope.items.price * $scope.items.quantity)/**$scope.taxnum*/}, bought:true},
		{id: 3, text: "Peaches",price:2.89,quantity:2, priceWtax:$scope.tax = function(price,quantity) {
			($scope.items.price * $scope.items.quantity)/**$scope.taxnum*/}, bought:true}
	];
	
	
	$scope.nextId = $scope.items.length + 1	 
	
	$scope.clearBought = function() {
		$scope.items = _.filter($sope.items, function(item) {
			return !item.bought;
		});
	}
	
	$scope.addItem = function() {
		$scope.items.push({text: $scope.itemEntry, price:$scope.priceEntry, quantity:$scope.quantityEntry, priceWtax:$scope.tax, bought: false, id: ($scope.nextId)});
		$scope.nextId++;
		$scope.priceEntry = '';
		$scope.quantityEntry = '';
		$scope.itemEntry = '';
	}
	
	$scope.isBought = function(bought) {
		return (bought) ? 'bought' : 'not-bought';
	}
	

	
	});
