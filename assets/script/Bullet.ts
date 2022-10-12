import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {
  @property
  public speed = 1;

  start() {}

  update(deltaTime: number) {
    const bulletPosition = this.node.position;
    this.node.setPosition(bulletPosition.x,bulletPosition.y + this.speed,bulletPosition.z);
  }
}
