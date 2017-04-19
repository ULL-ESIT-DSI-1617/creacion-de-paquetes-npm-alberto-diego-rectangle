var rectangle = require("../index.js");
require('should');

describe("Rectangle", function() {
  it("Se crea correctamente la clase Rectangle", function() {
    var figura = new rectangle({ width: 100, height: 100 });

    figura.options.width.should.equal(100);
  })
});
