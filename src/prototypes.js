if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  const proto = Element.prototype;

  proto.matches = proto.matchesSelector ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector ||
    proto.webkitMatchesSelector;
}
