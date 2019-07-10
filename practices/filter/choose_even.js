'use strict';

const select_even = item => item % 2 === 0;

const choose_even = (collection) => {
  return collection.filter(item => select_even(item))
}

module.exports = choose_even;
