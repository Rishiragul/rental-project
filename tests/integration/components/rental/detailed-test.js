import { module, test } from 'qunit';
import { setupRenderingTest } from 'rental-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/detailed', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
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
  });
  test('it renders the detailed page with a share button', async function (assert) {
    await render(hbs`<Rental::Detailed @rental={{this.rental}}/>`);
    assert.dom('.top').exists();
    assert.dom('.top h2').containsText('First Mansion');
    assert
      .dom('.top p')
      .containsText('Nice work! this gives addtional information of Chennai');
    assert.dom('.top a.button').containsText('share on Twitter');
  });
  test('it renders detailed information about the list', async function (assert) {
    await render(hbs`<Rental::Detailed @rental={{this.rental}} />`);

    assert.dom('article h3').containsText('About First Mansion');
    assert.dom('article .detail.owner').containsText('Rishi');
    assert.dom('article .detail.type').containsText('Standalone-Estate');
    assert.dom('article .detail.location').containsText('Chennai');
    assert.dom('article .detail.bedrooms').containsText('3');
    assert.dom('article .image').exists();
    assert.dom('.detailedMap').exists();
  });
});
