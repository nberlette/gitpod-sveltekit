/// <reference types="@sveltejs/kit" />

export type {
  IncomingRequest,
  RequestHandler,
  Request,
  Response,
  RawBody
} from '@sveltejs/kit';

interface Locals {
  userid: string;
}
 
type Todo = {
  uid: string;
  created_at: Date;
  text: string;
  done: boolean;
} & { [k: string]: any };

export type { Todo, Locals }