import { Middleware, MiddlewarePayload, MiddlewareNext } from './types';

export class MiddlewareRunner {
  private readonly _middlewares: Middleware[] = [];

  /**
   * Add a @middleware to the chain.
   *
   * The provided middleware must call next(payload) for the chain to continue.
   * Otherwise any following middleware and next method will not be called.
   *
   * @param middleware A Middleware function
   */
  add(middleware: Middleware): void {
    this._middlewares.push(middleware);
  }

  /**
   * Runs the middleware chain with the given payload.
   *
   * @param payload The payload data for the middleware to receive
   * @param next The function to call after all middleware completes. Only runs if next(payload) is called by all middlewares.
   */
  run(payload: MiddlewarePayload, next: MiddlewareNext): void {
    let curMiddlewareIndex = -1;
    const middlewareCount = this._middlewares.length;

    const middlewareNext: MiddlewareNext = (curPayload) => {
      curMiddlewareIndex += 1;
      if (curMiddlewareIndex < middlewareCount) {
        this._middlewares[curMiddlewareIndex](curPayload, _next);
      } else {
        next(curPayload);
      }
    };

    const _next: MiddlewareNext = middlewareCount > 0 ? middlewareNext : next;

    _next(payload);
  }
}
