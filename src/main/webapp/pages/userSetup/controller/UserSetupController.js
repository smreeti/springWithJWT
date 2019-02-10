(function () {
    angular.module("adminModule")
        .controller("UserSetupController", UserSetupController);

    UserSetupController.$inject = ['UserSetupService', '$uibModal'];

    function UserSetupController(UserSetupService, $uibModal) {
        var vm = this;

        vm.userSetupData = {
            name: '',
            username: '',
            emailAddress: '',
            password: '',
            status: ''
        };

        vm.confirmPassword = '';

        vm.successMessage = '';

        vm.errorMessage = '';

        vm.save = save;

        vm.resetAction = resetAction;

        vm.resetAlertMessages = resetAlertMessages;

        vm.fetchAllUsers = fetchAllUsers;

        function save() {
            UserSetupService.save(vm.userSetupData).then(
                (response) => {
                    vm.successMessage = "User created successfully";
                    vm.resetAction();
                },
                (error) => {
                    vm.errorMessage = error.data.errormsg;

                });
        }

        function resetAction() {
            vm.userSetupData = {
                name: '',
                username: '',
                emailAddress: '',
                password: '',
                status: ''
            };
            vm.confirmPassword = '';
        }

        function resetAlertMessages() {
            vm.successMessage = '';
            vm.errorMessage = '';
        }

        function openModal() {
            var modalInstance = $uibModal.open({
                size: 'sm',
                templateUrl: 'pages/userSetup/modal/userDetails.jsp',
                controller: 'UserDetailModalController as detailCtrl',
            });
        }

    }
})();