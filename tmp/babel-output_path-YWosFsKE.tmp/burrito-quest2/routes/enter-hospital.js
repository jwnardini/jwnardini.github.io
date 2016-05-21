define('burrito-quest2/routes/enter-hospital', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      followRandyIntoRoomNoItems: function followRandyIntoRoomNoItems() {
        this.set('followRandyIntoRoomNoItems', true);
        this.transitionTo('room-no-items-death');
      },
      followRandyIntoRoomDrugsSlingshot: function followRandyIntoRoomDrugsSlingshot() {
        this.set('followRandyIntoRoomDrugsSlingshot', true);
        this.transitionTo('room-drugs-slingshot');
      },
      followRandyIntoRoomTrophy: function followRandyIntoRoomTrophy() {
        this.set('followRandyIntoRoomTrophy', true);
        this.transitionTo('room-trophy');
      },
      followRandyIntoRoomDrugs: function followRandyIntoRoomDrugs() {
        this.set('followRandyIntoRoomDrugs', true);
        this.transitionTo('room-drugs-death');
      },
      followRandyIntoRoomSlingshot: function followRandyIntoRoomSlingshot() {
        this.set('followRandyIntoRoomSlingshot', true);
        this.transitionTo('room-slingshot-death');
      }
    },

    inventory: _ember['default'].inject.service()

  });
});