'use strict';

function compareArrays(a, b, identityAttr) {
  if (a === b)
    return true;
  if (!a || !b || a.length != b.length)
    return false;
  identityAttr = identityAttr || 'id';
  var seen = {};
  for (var i = 0, item; item = a[i]; i++) {
    seen[item[identityAttr]] = true;
  }
  for (var i = 0, item; item = b[i]; i++) {
    if (!seen[item[identityAttr]])
      return false;
  }
  return true;
}

function sortObjectsByString(ary, attr) {
  attr = attr || 'id';
  if (!Array.isArray(ary))
    ary = Array.slice.call(ary);
  ary.sort(function(a, b){
    if (a[attr] > b[attr])
      return 1;
    if (a[attr] < b[attr])
      return -1;
    return 0;
  });
  return ary;
}
