import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/rentals.json/`);
    let res = await response.json();
    let result;
    res.data.forEach((ele) => {
      if (ele.id == params.rental_id) result = ele;
    });
    let type;
    let id = result.id;
    let attributes = result.attributes;
    if (COMMUNITY_CATEGORIES.includes(result.attributes.category)) {
      type = 'Community';
    } else {
      type = 'Standalone';
    }
    return { type, ...attributes };
  }
}
