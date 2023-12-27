import { module, test } from 'qunit';

import { setupTest } from 'rental-project/tests/helpers';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);
  // test('it has the right type', function (assert) {
  //   let store = this.owner.lookup('service:store');
  //   let rental=store.createRecord('rental',{
  //     id: 'First-Mansion',
  //     title: 'First Mansion',
  //     owner: 'Rishi',
  //     city: 'Chennai',
  //     category: 'Estate',
  //     type: 'Standalone',
  //     bedrooms: 3,
  //     image: '/assets/images/mansion.png',
  //     description:
  //       'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
  // });
  //   assert.strictEqual(rental.type,'Standalone');
  //   rental.category="Condo";
  //   assert.strictEqual(rental.type,'Community')
  //   rental.category="Townhouse";
  //   assert.strictEqual(rental.type,'Community')
  //   rental.category="Apartment";
  //   assert.strictEqual(rental.type,'Community')
  //   rental.category="Estate";
  //   assert.strictEqual(rental.type,'Community')
  // });
});
