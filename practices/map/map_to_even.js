'use strict';

const increment = item => item + item

const map_to_even = collection => {
  return collection.map(item => increment(item))
}

module.exports = map_to_even;
