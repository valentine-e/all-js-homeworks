class StringBuilder {
  constructor(string) {
    this.value = string;
  }

  get string() {
    return this.value;
  }

  append(str) {
    this.value = this.value + str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder(".");

console.log(builder.string);

builder.append("^");
console.log(builder.string); // '.^'

builder.prepend("^");
console.log(builder.string); // '^.^'

builder.pad("=");
console.log(builder.string); // '=^.^='
