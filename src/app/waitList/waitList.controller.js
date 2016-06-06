(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['$firebaseArray'];
    
    function WaitListController($firebaseArray) {
        var vm = this;
        
        var fireParties = new Firebase('https://waitandeatgb.firebaseio.com/parties');
        var fireTextMessages = new Firebase('https://waitandeatgb.firebaseio.com/textMessages');
        
        function Party() {
            this.name = '';
            this.phone='';
            this.size='';
            this.done=false;
            this.notified=false;
        }
        
        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties) ; 
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
        }
        
        function removeParty(party){
            vm.parties.$remove(party);
        }
        
        function sendTextMessage(party) {
            var newTextMessage = {
                name: party.name,
                phoneNumber: party.size,
                size: party.size
            }
            fireTextMessages.push(newTextMessage);
            party.notified = true;
            vm.parties.$save(party);
        }

    
        
    }
    
})();