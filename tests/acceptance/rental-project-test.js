import { module, test } from 'qunit';
import { visit, currentURL, click, render, find } from '@ember/test-helpers';
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
  test('viewing the details of a rental property', async function (assert) {
    await visit('/');
    assert.dom('.rental').exists({ count: 3 });
    await click('.rental:first-of-type a');
    assert.strictEqual(currentURL(), '/rentals/First-Mansion');
  });
  test('after clicking the list items ito show the description of the item', async function (assert) {
    await visit('/rentals/First-Mansion');
    assert.strictEqual(currentURL(), '/rentals/First-Mansion');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('RENTAL');
    assert.dom('h2').hasText('First Mansion');
    assert.dom('.rental.detailed').exists();
    assert.dom('.share.button').hasText('share on Twitter');
    let button = find('.share.button');
    let tweetURL = new URL(button.href);
    assert.strictEqual(tweetURL.host, 'twitter.com');
    // assert.strictEqual(tweetURL.searchParams.get('url'),`${window.location.origin}/rentals/First-Mansion`);
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
