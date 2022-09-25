declare module "lodash" {
function head<T>(array:Array<T>): T
function hasIn<U>(obj:object, key:U): boolean
function isBoolean<V>(value:V): boolean
function toString<W>(value:W): string
function split<X>(strings:string, separator:string, limit:number): Array<X>
function hasPath<Y>(obj:object, path:(path:unknown, obj:object) => Y): boolean
function filter<M, N>(array:Array<M>, predicate:(value:M, index?:number, array?:Array<M>) => N): N
function every<O,P>(array:Array<O>, predicate:(arrayIndex:O, index?:number, array?:Array<O>) => P): boolean
function map<Q,R>(array:Array<Q>, iteratee:(arrayIndex:Q, index?:number, array?:Array<Q>) => R): Array<R>
}
