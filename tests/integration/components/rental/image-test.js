import { assert, module, test } from 'qunit';
import { setupRenderingTest } from 'rental-project/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the image of the rental list', async function (assert) {
    await render(hbs`<Rental::Image 
      src="/assets/images/mansion.png"
      alt="Mansion Image"/>
    `);
    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/mansion.png')
      .hasAttribute('alt', 'Mansion Image');
  });
  test('while clicking image type', async function () {
    await render(hbs`<Rental::Image 
    src="/assets/images/mansion.png"
    alt="Mansion Image"/>
  `);

    assert.dom('button.image').exists();
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('view Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('view Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('view Larger');
  });
});
