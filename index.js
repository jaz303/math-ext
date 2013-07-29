function clamp(min, max, v) {
  if (v < min) return min;
  if (v > max) return max;
  return v;
}

function clamper(min, max) {
  return function(v) {
    return clamp(min, max, v);
  }
}

function lerp(x, y, r) {
  return x + ((y - x) * r);
}

function lerper(x, y) {
  return function(r) {
    return lerp(x, y, r);
  }
}

function expose() {
  for (var k in module.exports) {
    if (k === 'expose')
      continue;
    Math[k] = module.exports[k];
  }
}

module.exports = {
  clamp   : clamp,
  clamper : clamper,
  lerp    : lerp,
  lerper  : lerper,

  expose  : expose
};
