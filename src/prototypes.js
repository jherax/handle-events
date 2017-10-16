/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */

if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  const proto = Element.prototype;

  proto.matches =
    proto.matchesSelector ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector ||
    proto.webkitMatchesSelector;
}
