export class Identify {
  payload: Record<string, Record<string, unknown>>;

  private static OP_SET = '$set';
  private static OP_SET_ONCE = '$setOnce';
  private static OP_ADD = '$add';
  private static OP_APPEND = '$append';
  private static OP_UNSET = '$unset';

  private static ALL_OPS = [
    Identify.OP_SET,
    Identify.OP_SET_ONCE,
    Identify.OP_ADD,
    Identify.OP_APPEND,
    Identify.OP_UNSET,
  ];

  constructor() {
    this.payload = {};
  }

  set(key: string, value: unknown): void {
    this.addOp(Identify.OP_SET, key, value);
  }

  setOnce(key: string, value: unknown): void {
    this.addOp(Identify.OP_SET_ONCE, key, value);
  }

  add(key: string, value: number): void {
    this.addOp(Identify.OP_ADD, key, value);
  }

  unset(key: string): void {
    this.addOp(Identify.OP_UNSET, key, '-');
  }

  append(key: string, value: unknown): void {
    this.addOp(Identify.OP_APPEND, key, value);
  }

  private addOp(op: string, key: string, value: unknown): void {
    if (!Identify.ALL_OPS.includes(op)) {
      throw new Error(
        `Unknown Identify operation: ${op} called with key: ${key} value: ${String(
          value,
        )}`,
      );
    }
    this.opMap(op)[key] = value;
  }

  private opMap(key: string): Record<string, unknown> {
    if (!Object.prototype.hasOwnProperty.call(this.payload, key)) {
      this.payload[key] = {};
    }
    return this.payload[key];
  }
}
