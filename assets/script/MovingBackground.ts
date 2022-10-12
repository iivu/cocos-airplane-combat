import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MovingBackground')
export class MovingBackground extends Component {
  @property(Node)
  bg1: Node = null;
  @property(Node)
  bg2: Node = null;

  private _movingSpeed = 10;            // 背景移动速度
  private _movingMaxDistance = 100;     // 背景的最大移动距离

  private _movingBackground(deltaTime:number) {
    this.bg1.setPosition(0,this.bg1.position.y - deltaTime * this._movingSpeed,0);
    this.bg2.setPosition(0,this.bg2.position.y - deltaTime * this._movingSpeed,0);

    if(Math.abs(this.bg1.position.y) >= this._movingMaxDistance) {
        this.bg1.setPosition(0 , this.bg2.position.y + this._movingMaxDistance,0);
    }
    if(Math.abs(this.bg2.position.y) >= this._movingMaxDistance) {
        this.bg2.setPosition(0 , this.bg1.position.y + this._movingMaxDistance,0);
    }
  }

  update(deltaTime: number) {
    this._movingBackground(deltaTime);
  }
}
