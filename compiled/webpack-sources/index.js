class RawSource {
  constructor(value) {
    this.value = value;
  }
}

class SourceMapSource {
  constructor(value, name, map) {
    this.value = value;
    this.name = name;
    this.map = map;
  }
}

class OriginalSource {
  constructor(value, name) {
    this.value = value;
    this.name = name;
  }
}

module.exports = {
  RawSource,
  SourceMapSource,
  OriginalSource
};
