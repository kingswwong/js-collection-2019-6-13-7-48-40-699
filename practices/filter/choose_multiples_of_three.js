'use strict';

const multiples_select = item => item % 3 === 0

const choose_multiples_of_three = (collection) => {
  return collection.filter(item => multiples_select(item))
}

module.exports = choose_multiples_of_three;
