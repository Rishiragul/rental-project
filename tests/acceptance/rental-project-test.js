import { module, test } from 'qunit';
import { visit, currentURL, click, render } from '@ember/test-helpers';
import { setupApplicationTest } from 'rental-project/tests/helpers';

module('Acceptance | rental project', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('RENTAL');
    assert.dom('h2').hasText('Welcome to Super Rental');
    assert.dom('.top a.button').hasText('About us');

    await click('.top a.button');

    assert.equal(currentURL(), '/about');
  });
  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('RENTAL');
    assert.dom('h2').hasText('TO KNOW ABOUT THE WEBSITE');
    assert.dom('.top a.button').hasText('contact us');

    await click('.top a.button');

    assert.equal(currentURL(), '/contact');
  });
  test('visiting /contact', async function (assert) {
    await visit('/contact');

    assert.equal(currentURL(), '/contact');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('RENTAL');
    assert.dom('h2').hasText('Contact Us');
    assert.dom('.top a.button').hasText('About us');
    await click('.top a.button');
    assert.equal(currentURL(), '/about');
  });
  test('navigating using nav Bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('RENTAL');
    assert.dom('nav a.menu-about').hasText('ABOUT');
    assert.dom('nav a.menu-contact').hasText('CONTACT US');

    await click('nav a.menu-about');
    assert.strictEqual(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.strictEqual(currentURL(), '/contact');

    await click('nav a.menu-index');
    assert.strictEqual(currentURL(), '/');
  });
});
