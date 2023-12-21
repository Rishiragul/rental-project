import { module, test } from 'qunit';
import { setupRenderingTest } from 'rental-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | top', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a top header with a image', async function (assert) {
    await render(hbs`<Top>Hello World</Top>`);
    assert.dom('.top').exists();
    assert.dom('.top').hasText('Hello World');
    assert.dom('.top .image').exists();
  });
});
   