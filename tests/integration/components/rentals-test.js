import { assert, module, test } from 'qunit';
import { setupRenderingTest } from 'rental-project/tests/helpers';
import { render,fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rentals', function (hooks) {
  setupRenderingTest(hooks);

  // test('it render all given rental properties by default', async function (assert) {
    hooks.beforeEach(function(){
    this.setProperties({
      rentals: [
        {
          id: 'First-Mansion',
          title: 'First Mansion',
          owner: 'Rishi',
          city: 'chennai',
          category: 'Estate',
          bedrooms: 3,
          image: '/assets/images/mansion.png',
          description:
            'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        },
        {
          id: 'urban-living',

          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Kashmir',
          category: 'Condo',
          bedrooms: 1,
          image: '/assets/images/mansion.png',
          description:
            'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.',
        },
        {
          id: 'downtown-charm',

          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          category: 'Apartment',
          bedrooms: 3,
          image: '/assets/images/mansion.png',
          description:
            'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.',
        },
      ],
    });
  });
  test('it render all given rental properties by default', async function (assert) {
    await render(hbs`<Rentals @rentals={{this.rentals}}/>`);
    assert.dom('.rentals').exists();
    assert.dom('.rentals input').exists();
    assert.dom('.rentals .results').exists();
    assert.dom('.rentals .results li').exists({ count: 3 });
    assert
      .dom('.rentals .results li:nth-of-type(1)')
      .containsText('First Mansion');
    assert
      .dom('.rentals .results li:nth-of-type(2)')
      .containsText('Urban Living');
    assert
      .dom('.rentals .results li:nth-of-type(3)')
      .containsText('Downtown Charm');
  });
  test('it updates the result according to search query',async function(assert){
    await render(hbs`<Rentals @rentals={{this.rentals}}/>`);
    assert.dom('.rentals').exists;
    assert.dom('.rentals input').exists();

    await fillIn('.rentals input', 'Downtown');

    assert.dom('.rentals .results').exists();
    assert.dom('.rentals .results li').exists({ count: 1});
  })
});
