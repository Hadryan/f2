const Util = require('../../util/common');
const Shape = require('../shape');

class Circle extends Shape {
  getDefaultCfg() {
    const cfg = super.getDefaultCfg();
    return Util.mix({}, cfg, {
      canFill: true,
      canStroke: true,
      type: 'circle'
    });
  }

  getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      r: 0,
      lineWidth: 1
    };
  }

  createPath(context) {
    const attrs = this.get('attrs');
    const { x, y, r } = attrs;
    context = context || this.get('context');
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
  }

  calculateBox() {
    const attrs = this.get('attrs');
    const { x, y, r, lineWidth } = attrs;
    const halfLineWidth = lineWidth / 2;

    return {
      minX: x - r - halfLineWidth,
      maxX: x + r + halfLineWidth,
      minY: y - r - halfLineWidth,
      maxY: y + r + halfLineWidth
    };
  }
}

module.exports = Circle;
