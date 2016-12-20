// utils method

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


function random (low, high) {
    return Math.random() * (high - low) + low;
}

function getStr(msg) {
    // return random(1, 100) + msg;
    return 'msg-id: ' + _cachedGUID + '-' + msg;
}

function getVal (_cachedGUID) {
  return function (msg) {
    return 'msg-id: ' + _cachedGUID + '-' + msg;
  }
}

module.exports = {
        guid: guid,
        random: random,
        getVal: getVal
}
