'use strict';

const four_multiples_add_one = item => item * 4 + 1;

const map_to_four_multiples_add_one = collection => {
  return collection.map(item => four_multiples_add_one(item));
};

module.exports = map_to_four_multiples_add_one;
