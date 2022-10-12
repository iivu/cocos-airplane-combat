import { _decorator, Component, Node, EventTouch, input, Input } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('UIManager')
export class UIManager extends Component {
    @property
    public playerSpeed = .1;
    
    @property(Node)
    public player: Node = null;

    private _touchMove(event: EventTouch) {
      const delta = event.getDelta();
      const playerPosition = this.player.position;
      this.player.setPosition(
        playerPosition.x + delta.x * this.playerSpeed,
        playerPosition.y + delta.y * this.playerSpeed,
        playerPosition.z
      );
    }
  
    onEnable() {
      input.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    }
  
    onDisable() {
      input.off(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    }
}

