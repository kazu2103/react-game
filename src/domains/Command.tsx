export class Command {
  private _name: string;
  private _action: () => void;

  constructor(
    name: string,
    action: () => void,
  ) {
    this._name = name;
    this._action = action;
  }

  get name() : string {
    return this._name;
  }

  get action() : () => void {
    return this._action;
  }

}