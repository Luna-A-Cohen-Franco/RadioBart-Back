import * as e from 'express';
import { Query } from 'express-serve-static-core';

export interface Payload {
  id: number;
}


export interface IReq<T = void> extends e.Request {
    body: T;
    payload?: Payload; // Asegúrate de que `payload` esté definido aquí
}

export interface IReqQuery<T extends Query, U = void> extends e.Request {
    query: T;
    body: U;
}

export interface IRes extends e.Response {}