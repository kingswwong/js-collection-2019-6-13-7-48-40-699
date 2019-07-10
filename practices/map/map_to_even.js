'use strict';

function map_to_even(collection) {
  return collection.map(item => {
    return item + item;
  });
}

module.exports = map_to_even;
