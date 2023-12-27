import { module, test } from 'qunit';
import { setupRenderingTest } from 'rental-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a map image for the specified city', async function (assert) {
    await render(hbs`<Map/>`);
    assert.dom('.map img').exists().hasAttribute('alt', 'Map-image');
  });
});
