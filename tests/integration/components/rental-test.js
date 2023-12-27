import { module, test } from 'qunit';
import { setupRenderingTest } from 'rental-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information of rental list', async function (assert) {
    await render(hbs`<Rental />`);
    this.setProperties({
      rental: {
        id: 'First-Mansion',
        title: 'First Mansion',
        owner: 'Rishi',
        city: 'Chennai',
        category: 'Estate',
        type: 'Standalone',
        bedrooms: 3,
        image: '/assets/images/mansion.png',
        description:
          'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
      },
    });

    await render(hbs`<Rental @rental={{this.rental}} />`);
    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('First Mansion');
    assert.dom('article h3 a').hasAttribute('href', '/rentals/First-Mansion');
    assert.dom('article .detail.owner').includesText('Rishi');
    assert.dom('article .detail.type').includesText('Standalone');
    assert.dom('article .detail.location').includesText('Chennai');
    assert.dom('article .detail.bedrooms').includesText('3');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });
});
