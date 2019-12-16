import Component from "./Component.class.mjs";

class Bullet extends Component {
  constructor(...args) {
    super(...args);
    this.fireDown = this.fireDown.bind(this);
    this.fireUp = this.fireUp.bind(this);
  }

  fireDown() {
    this.speedY += 4;
  }

  fireUp() {
    this.speedY -= 4;
  }

  static doc() {
    return "Bullet class";
  }

  toString() {
    return this.toString();
  }
}

export default Bullet;
