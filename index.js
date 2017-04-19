"use strict";
var shape = require('ull-shape-alberto-diego');

/**
 * Clase Rectangle que hereda de la clase Shape.
 */
class Rectangle extends shape {
  /**
   * Constructor de la clase Rectangle, en la que se guarda el objeto de dimensiones
   * @param {Object} input objeto de dimensiones
   */
  constructor(options){
    super(options);
    this.width = this.options.width;
    this.height = this.options.height;
  }
  /**
   * Funcion getArea, calcula el área de la figura
   * @returns {number} devuelve el cálculo del área de la figura
   */
  getArea() {
    return this.width * this.height;
  }
}

module.exports = Rectangle;
shape.shapes.Rectangle = Rectangle;
