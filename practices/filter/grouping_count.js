'use strict';

function grouping_count(collection) {
  return collection.reduce((item, index) => {
    item[index] ? item[index]++ : item[index] = 1
    return item;
  }, {})
}

module.exports = grouping_count;
