export enum IdentifyOperation {
  SET = '$set',
  SET_ONCE = '$setOnce',
  ADD = '$add',
  APPEND = '$append',
  UNSET = '$unset',
}

export interface IdentifyPayload {
  // Add operations can only take numbers
  [IdentifyOperation.ADD]?: Record<string, number>;

  // This reads the keys of the passed object, but the values are not used
  [IdentifyOperation.UNSET]?: Record<string, unknown>;

  [IdentifyOperation.SET]?: Record<string, unknown>;
  [IdentifyOperation.SET_ONCE]?: Record<string, unknown>;
  [IdentifyOperation.APPEND]?: Record<string, unknown>;
}

export class Identify {
  payload: IdentifyPayload;

  private static ALL_OPS = [
    IdentifyOperation.SET,
    IdentifyOperation.SET_ONCE,
    IdentifyOperation.ADD,
    IdentifyOperation.APPEND,
    IdentifyOperation.UNSET,
  ];

  constructor() {
    this.payload = {};
  }

  set(key: string, value: unknown): void {
    this.addOp(IdentifyOperation.SET, key, value);
  }

  setOnce(key: string, value: unknown): void {
    this.addOp(IdentifyOperation.SET_ONCE, key, value);
  }

  add(key: string, value: number): void {
    this.addOp(IdentifyOperation.ADD, key, value);
  }

  unset(key: string): void {
    this.addOp(IdentifyOperation.UNSET, key, '-');
  }

  append(key: string, value: unknown): void {
    this.addOp(IdentifyOperation.APPEND, key, value);
  }

  private addOp(op: IdentifyOperation, key: string, value: unknown): void {
    if (!Identify.ALL_OPS.includes(op)) {
      throw new Error(
        `Unknown Identify operation: ${op} called with key: ${key} value: ${String(
          value,
        )}`,
      );
    }
    this.opMap(op)[key] = value;
  }

  private opMap(op: IdentifyOperation): Record<string, unknown> {
    if (!Object.prototype.hasOwnProperty.call(this.payload, op)) {
      this.payload[op] = {};
    }
    return this.payload[op]!;
  }
}

export function deepClonePayload(payload: IdentifyPayload): IdentifyPayload {
  return JSON.parse(JSON.stringify(payload));
}
