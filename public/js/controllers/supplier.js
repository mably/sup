(function () {

	lnwebcli.controller("SupplierCtrl", ["$scope", "$timeout", "$uibModal", "lncli", "config", controller]);

	function controller($scope, $timeout, $uibModal, lncli, config) {

		$scope.spinner = 0;
		$scope.nextRefresh = null;

		$scope.refresh = function() {
			$scope.spinner++;
			$scope.updateNextRefresh();
			$scope.spinner--;
		}

		$scope.updateNextRefresh = function () {
			$timeout.cancel($scope.nextRefresh);
			$scope.nextRefresh = $timeout($scope.refresh,
				lncli.getConfigValue(config.keys.AUTO_REFRESH, config.defaults.AUTO_REFRESH));
		}

		$scope.refresh();

	}

})();
