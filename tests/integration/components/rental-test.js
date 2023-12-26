import { module, test } from 'qunit';
import { setupRenderingTest } from 'rental-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information of rental list', async function (assert) {
    await render(hbs`<Rental />`);
    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('First Mansion');
    assert.dom('article .detail.owner').includesText('Rishi');
    assert.dom('article .detail.type').includesText('Standalone');
    assert.dom('article .detail.location').includesText('Chennai');
    assert.dom('article .detail.bedrooms').includesText('3');
    assert.dom('article .image').exists();
  });
});
