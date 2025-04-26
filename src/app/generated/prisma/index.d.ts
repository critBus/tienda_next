
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model Province
 * 
 */
export type Province = $Result.DefaultSelection<Prisma.$ProvincePayload>
/**
 * Model Municipality
 * 
 */
export type Municipality = $Result.DefaultSelection<Prisma.$MunicipalityPayload>
/**
 * Model Town
 * 
 */
export type Town = $Result.DefaultSelection<Prisma.$TownPayload>
/**
 * Model ProductAvailability
 * 
 */
export type ProductAvailability = $Result.DefaultSelection<Prisma.$ProductAvailabilityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Currencies
 * const currencies = await prisma.currency.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Currencies
   * const currencies = await prisma.currency.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipality`: Exposes CRUD operations for the **Municipality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipalities
    * const municipalities = await prisma.municipality.findMany()
    * ```
    */
  get municipality(): Prisma.MunicipalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.town`: Exposes CRUD operations for the **Town** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towns
    * const towns = await prisma.town.findMany()
    * ```
    */
  get town(): Prisma.TownDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productAvailability`: Exposes CRUD operations for the **ProductAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAvailabilities
    * const productAvailabilities = await prisma.productAvailability.findMany()
    * ```
    */
  get productAvailability(): Prisma.ProductAvailabilityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Currency: 'Currency',
    Company: 'Company',
    Product: 'Product',
    ProductImage: 'ProductImage',
    Category: 'Category',
    Price: 'Price',
    Province: 'Province',
    Municipality: 'Municipality',
    Town: 'Town',
    ProductAvailability: 'ProductAvailability'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "currency" | "company" | "product" | "productImage" | "category" | "price" | "province" | "municipality" | "town" | "productAvailability"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      Province: {
        payload: Prisma.$ProvincePayload<ExtArgs>
        fields: Prisma.ProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findFirst: {
            args: Prisma.ProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findMany: {
            args: Prisma.ProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          create: {
            args: Prisma.ProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          createMany: {
            args: Prisma.ProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          delete: {
            args: Prisma.ProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          update: {
            args: Prisma.ProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          deleteMany: {
            args: Prisma.ProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvinceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          upsert: {
            args: Prisma.ProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.ProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      Municipality: {
        payload: Prisma.$MunicipalityPayload<ExtArgs>
        fields: Prisma.MunicipalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          findFirst: {
            args: Prisma.MunicipalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          findMany: {
            args: Prisma.MunicipalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          create: {
            args: Prisma.MunicipalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          createMany: {
            args: Prisma.MunicipalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          delete: {
            args: Prisma.MunicipalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          update: {
            args: Prisma.MunicipalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          deleteMany: {
            args: Prisma.MunicipalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          upsert: {
            args: Prisma.MunicipalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          aggregate: {
            args: Prisma.MunicipalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipality>
          }
          groupBy: {
            args: Prisma.MunicipalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipalityCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityCountAggregateOutputType> | number
          }
        }
      }
      Town: {
        payload: Prisma.$TownPayload<ExtArgs>
        fields: Prisma.TownFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TownFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TownFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>
          }
          findFirst: {
            args: Prisma.TownFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TownFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>
          }
          findMany: {
            args: Prisma.TownFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>[]
          }
          create: {
            args: Prisma.TownCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>
          }
          createMany: {
            args: Prisma.TownCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TownCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>[]
          }
          delete: {
            args: Prisma.TownDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>
          }
          update: {
            args: Prisma.TownUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>
          }
          deleteMany: {
            args: Prisma.TownDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TownUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TownUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>[]
          }
          upsert: {
            args: Prisma.TownUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownPayload>
          }
          aggregate: {
            args: Prisma.TownAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTown>
          }
          groupBy: {
            args: Prisma.TownGroupByArgs<ExtArgs>
            result: $Utils.Optional<TownGroupByOutputType>[]
          }
          count: {
            args: Prisma.TownCountArgs<ExtArgs>
            result: $Utils.Optional<TownCountAggregateOutputType> | number
          }
        }
      }
      ProductAvailability: {
        payload: Prisma.$ProductAvailabilityPayload<ExtArgs>
        fields: Prisma.ProductAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.ProductAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>
          }
          findMany: {
            args: Prisma.ProductAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>[]
          }
          create: {
            args: Prisma.ProductAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>
          }
          createMany: {
            args: Prisma.ProductAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.ProductAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>
          }
          update: {
            args: Prisma.ProductAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.ProductAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.ProductAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.ProductAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductAvailability>
          }
          groupBy: {
            args: Prisma.ProductAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<ProductAvailabilityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    currency?: CurrencyOmit
    company?: CompanyOmit
    product?: ProductOmit
    productImage?: ProductImageOmit
    category?: CategoryOmit
    price?: PriceOmit
    province?: ProvinceOmit
    municipality?: MunicipalityOmit
    town?: TownOmit
    productAvailability?: ProductAvailabilityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    Price: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Price?: boolean | CurrencyCountOutputTypeCountPriceArgs
  }

  // Custom InputTypes
  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    Product: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CompanyCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    Price: number
    availableLocations: number
    ProductImage: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Price?: boolean | ProductCountOutputTypeCountPriceArgs
    availableLocations?: boolean | ProductCountOutputTypeCountAvailableLocationsArgs
    ProductImage?: boolean | ProductCountOutputTypeCountProductImageArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAvailableLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAvailabilityWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    municipalities: number
    availableProducts: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipalities?: boolean | ProvinceCountOutputTypeCountMunicipalitiesArgs
    availableProducts?: boolean | ProvinceCountOutputTypeCountAvailableProductsArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountMunicipalitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalityWhereInput
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountAvailableProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAvailabilityWhereInput
  }


  /**
   * Count Type MunicipalityCountOutputType
   */

  export type MunicipalityCountOutputType = {
    towns: number
    availableProducts: number
  }

  export type MunicipalityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    towns?: boolean | MunicipalityCountOutputTypeCountTownsArgs
    availableProducts?: boolean | MunicipalityCountOutputTypeCountAvailableProductsArgs
  }

  // Custom InputTypes
  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityCountOutputType
     */
    select?: MunicipalityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountTownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TownWhereInput
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountAvailableProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAvailabilityWhereInput
  }


  /**
   * Count Type TownCountOutputType
   */

  export type TownCountOutputType = {
    availableProducts: number
  }

  export type TownCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availableProducts?: boolean | TownCountOutputTypeCountAvailableProductsArgs
  }

  // Custom InputTypes
  /**
   * TownCountOutputType without action
   */
  export type TownCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownCountOutputType
     */
    select?: TownCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TownCountOutputType without action
   */
  export type TownCountOutputTypeCountAvailableProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAvailabilityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    id: number | null
    baseRate: Decimal | null
  }

  export type CurrencySumAggregateOutputType = {
    id: number | null
    baseRate: Decimal | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: number | null
    name: string | null
    baseRate: Decimal | null
    isDefault: boolean | null
    isBase: boolean | null
    symbol: string | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    baseRate: Decimal | null
    isDefault: boolean | null
    isBase: boolean | null
    symbol: string | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    name: number
    baseRate: number
    isDefault: number
    isBase: number
    symbol: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    id?: true
    baseRate?: true
  }

  export type CurrencySumAggregateInputType = {
    id?: true
    baseRate?: true
  }

  export type CurrencyMinAggregateInputType = {
    id?: true
    name?: true
    baseRate?: true
    isDefault?: true
    isBase?: true
    symbol?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    name?: true
    baseRate?: true
    isDefault?: true
    isBase?: true
    symbol?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    name?: true
    baseRate?: true
    isDefault?: true
    isBase?: true
    symbol?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: number
    name: string
    baseRate: Decimal
    isDefault: boolean
    isBase: boolean
    symbol: string
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseRate?: boolean
    isDefault?: boolean
    isBase?: boolean
    symbol?: boolean
    Price?: boolean | Currency$PriceArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseRate?: boolean
    isDefault?: boolean
    isBase?: boolean
    symbol?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseRate?: boolean
    isDefault?: boolean
    isBase?: boolean
    symbol?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    id?: boolean
    name?: boolean
    baseRate?: boolean
    isDefault?: boolean
    isBase?: boolean
    symbol?: boolean
  }

  export type CurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "baseRate" | "isDefault" | "isBase" | "symbol", ExtArgs["result"]["currency"]>
  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Price?: boolean | Currency$PriceArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      Price: Prisma.$PricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      baseRate: Prisma.Decimal
      isDefault: boolean
      isBase: boolean
      symbol: string
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }

  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyFindUniqueArgs>(args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyFindFirstArgs>(args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyFindManyArgs>(args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
     */
    create<T extends CurrencyCreateArgs>(args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyCreateManyArgs>(args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {CurrencyCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
     */
    delete<T extends CurrencyDeleteArgs>(args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyUpdateArgs>(args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyUpdateManyArgs>(args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies and returns the data updated in the database.
     * @param {CurrencyUpdateManyAndReturnArgs} args - Arguments to update many Currencies.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyUpsertArgs>(args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Price<T extends Currency$PriceArgs<ExtArgs> = {}>(args?: Subset<T, Currency$PriceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Currency model
   */
  interface CurrencyFieldRefs {
    readonly id: FieldRef<"Currency", 'Int'>
    readonly name: FieldRef<"Currency", 'String'>
    readonly baseRate: FieldRef<"Currency", 'Decimal'>
    readonly isDefault: FieldRef<"Currency", 'Boolean'>
    readonly isBase: FieldRef<"Currency", 'Boolean'>
    readonly symbol: FieldRef<"Currency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }

  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency createManyAndReturn
   */
  export type CurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency updateManyAndReturn
   */
  export type CurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }

  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to delete.
     */
    limit?: number
  }

  /**
   * Currency.Price
   */
  export type Currency$PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Product?: boolean | Company$ProductArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Company$ProductArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Company$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Company$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.Product
   */
  export type Company$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    priceBaseCurrency: Decimal | null
    priceBaseDiscount: number | null
    stock: number | null
    discountPercentage: number | null
    categoryId: number | null
    companyId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    priceBaseCurrency: Decimal | null
    priceBaseDiscount: number | null
    stock: number | null
    discountPercentage: number | null
    categoryId: number | null
    companyId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    priceBaseCurrency: Decimal | null
    priceBaseDiscount: number | null
    stock: number | null
    image: string | null
    discountPercentage: number | null
    freeShipping: boolean | null
    categoryId: number | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    itsNew: boolean | null
    brand: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    priceBaseCurrency: Decimal | null
    priceBaseDiscount: number | null
    stock: number | null
    image: string | null
    discountPercentage: number | null
    freeShipping: boolean | null
    categoryId: number | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    itsNew: boolean | null
    brand: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    priceBaseCurrency: number
    priceBaseDiscount: number
    stock: number
    image: number
    discountPercentage: number
    freeShipping: number
    categoryId: number
    companyId: number
    createdAt: number
    updatedAt: number
    itsNew: number
    brand: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    priceBaseCurrency?: true
    priceBaseDiscount?: true
    stock?: true
    discountPercentage?: true
    categoryId?: true
    companyId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    priceBaseCurrency?: true
    priceBaseDiscount?: true
    stock?: true
    discountPercentage?: true
    categoryId?: true
    companyId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceBaseCurrency?: true
    priceBaseDiscount?: true
    stock?: true
    image?: true
    discountPercentage?: true
    freeShipping?: true
    categoryId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    itsNew?: true
    brand?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceBaseCurrency?: true
    priceBaseDiscount?: true
    stock?: true
    image?: true
    discountPercentage?: true
    freeShipping?: true
    categoryId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    itsNew?: true
    brand?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    priceBaseCurrency?: true
    priceBaseDiscount?: true
    stock?: true
    image?: true
    discountPercentage?: true
    freeShipping?: true
    categoryId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    itsNew?: true
    brand?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string
    priceBaseCurrency: Decimal
    priceBaseDiscount: number | null
    stock: number
    image: string
    discountPercentage: number | null
    freeShipping: boolean
    categoryId: number
    companyId: number
    createdAt: Date
    updatedAt: Date
    itsNew: boolean
    brand: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceBaseCurrency?: boolean
    priceBaseDiscount?: boolean
    stock?: boolean
    image?: boolean
    discountPercentage?: boolean
    freeShipping?: boolean
    categoryId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itsNew?: boolean
    brand?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    Price?: boolean | Product$PriceArgs<ExtArgs>
    availableLocations?: boolean | Product$availableLocationsArgs<ExtArgs>
    ProductImage?: boolean | Product$ProductImageArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceBaseCurrency?: boolean
    priceBaseDiscount?: boolean
    stock?: boolean
    image?: boolean
    discountPercentage?: boolean
    freeShipping?: boolean
    categoryId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itsNew?: boolean
    brand?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    priceBaseCurrency?: boolean
    priceBaseDiscount?: boolean
    stock?: boolean
    image?: boolean
    discountPercentage?: boolean
    freeShipping?: boolean
    categoryId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itsNew?: boolean
    brand?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    priceBaseCurrency?: boolean
    priceBaseDiscount?: boolean
    stock?: boolean
    image?: boolean
    discountPercentage?: boolean
    freeShipping?: boolean
    categoryId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itsNew?: boolean
    brand?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "priceBaseCurrency" | "priceBaseDiscount" | "stock" | "image" | "discountPercentage" | "freeShipping" | "categoryId" | "companyId" | "createdAt" | "updatedAt" | "itsNew" | "brand", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    Price?: boolean | Product$PriceArgs<ExtArgs>
    availableLocations?: boolean | Product$availableLocationsArgs<ExtArgs>
    ProductImage?: boolean | Product$ProductImageArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      Price: Prisma.$PricePayload<ExtArgs>[]
      availableLocations: Prisma.$ProductAvailabilityPayload<ExtArgs>[]
      ProductImage: Prisma.$ProductImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      priceBaseCurrency: Prisma.Decimal
      priceBaseDiscount: number | null
      stock: number
      image: string
      discountPercentage: number | null
      freeShipping: boolean
      categoryId: number
      companyId: number
      createdAt: Date
      updatedAt: Date
      itsNew: boolean
      brand: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Price<T extends Product$PriceArgs<ExtArgs> = {}>(args?: Subset<T, Product$PriceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availableLocations<T extends Product$availableLocationsArgs<ExtArgs> = {}>(args?: Subset<T, Product$availableLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductImage<T extends Product$ProductImageArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly priceBaseCurrency: FieldRef<"Product", 'Decimal'>
    readonly priceBaseDiscount: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly image: FieldRef<"Product", 'String'>
    readonly discountPercentage: FieldRef<"Product", 'Float'>
    readonly freeShipping: FieldRef<"Product", 'Boolean'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly companyId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly itsNew: FieldRef<"Product", 'Boolean'>
    readonly brand: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.Price
   */
  export type Product$PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Product.availableLocations
   */
  export type Product$availableLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    where?: ProductAvailabilityWhereInput
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    cursor?: ProductAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAvailabilityScalarFieldEnum | ProductAvailabilityScalarFieldEnum[]
  }

  /**
   * Product.ProductImage
   */
  export type Product$ProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    productId: number | null
    cover: boolean | null
    image: string | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    cover: boolean | null
    image: string | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    cover: number
    image: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    cover?: true
    image?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    cover?: true
    image?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    cover?: true
    image?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    productId: number
    cover: boolean
    image: string
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    cover?: boolean
    image?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    cover?: boolean
    image?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    cover?: boolean
    image?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    cover?: boolean
    image?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "cover" | "image", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      cover: boolean
      image: string
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly productId: FieldRef<"ProductImage", 'Int'>
    readonly cover: FieldRef<"ProductImage", 'Boolean'>
    readonly image: FieldRef<"ProductImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    image: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    image: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "image", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      image: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly image: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    currencyId: number | null
    value: Decimal | null
  }

  export type PriceSumAggregateOutputType = {
    id: number | null
    productId: number | null
    currencyId: number | null
    value: Decimal | null
  }

  export type PriceMinAggregateOutputType = {
    id: number | null
    productId: number | null
    currencyId: number | null
    value: Decimal | null
    isFixed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    currencyId: number | null
    value: Decimal | null
    isFixed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceCountAggregateOutputType = {
    id: number
    productId: number
    currencyId: number
    value: number
    isFixed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    id?: true
    productId?: true
    currencyId?: true
    value?: true
  }

  export type PriceSumAggregateInputType = {
    id?: true
    productId?: true
    currencyId?: true
    value?: true
  }

  export type PriceMinAggregateInputType = {
    id?: true
    productId?: true
    currencyId?: true
    value?: true
    isFixed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceMaxAggregateInputType = {
    id?: true
    productId?: true
    currencyId?: true
    value?: true
    isFixed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceCountAggregateInputType = {
    id?: true
    productId?: true
    currencyId?: true
    value?: true
    isFixed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    id: number
    productId: number
    currencyId: number
    value: Decimal
    isFixed: boolean
    createdAt: Date
    updatedAt: Date
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    currencyId?: boolean
    value?: boolean
    isFixed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    currencyId?: boolean
    value?: boolean
    isFixed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    currencyId?: boolean
    value?: boolean
    isFixed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    id?: boolean
    productId?: boolean
    currencyId?: boolean
    value?: boolean
    isFixed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "currencyId" | "value" | "isFixed" | "createdAt" | "updatedAt", ExtArgs["result"]["price"]>
  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type PriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      currency: Prisma.$CurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      currencyId: number
      value: Prisma.Decimal
      isFixed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices and returns the data updated in the database.
     * @param {PriceUpdateManyAndReturnArgs} args - Arguments to update many Prices.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Price model
   */
  interface PriceFieldRefs {
    readonly id: FieldRef<"Price", 'Int'>
    readonly productId: FieldRef<"Price", 'Int'>
    readonly currencyId: FieldRef<"Price", 'Int'>
    readonly value: FieldRef<"Price", 'Decimal'>
    readonly isFixed: FieldRef<"Price", 'Boolean'>
    readonly createdAt: FieldRef<"Price", 'DateTime'>
    readonly updatedAt: FieldRef<"Price", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
  }

  /**
   * Price updateManyAndReturn
   */
  export type PriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to delete.
     */
    limit?: number
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model Province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    id: number | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    id?: true
  }

  export type ProvinceSumAggregateInputType = {
    id?: true
  }

  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithAggregationInput | ProvinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: number
    name: string
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    municipalities?: boolean | Province$municipalitiesArgs<ExtArgs>
    availableProducts?: boolean | Province$availableProductsArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["province"]>
  export type ProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipalities?: boolean | Province$municipalitiesArgs<ExtArgs>
    availableProducts?: boolean | Province$availableProductsArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProvinceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Province"
    objects: {
      municipalities: Prisma.$MunicipalityPayload<ExtArgs>[]
      availableProducts: Prisma.$ProductAvailabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = $Result.GetResult<Prisma.$ProvincePayload, S>

  type ProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Province'], meta: { name: 'Province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinceFindUniqueArgs>(args: SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinceFindFirstArgs>(args?: SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinceFindManyArgs>(args?: SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends ProvinceCreateArgs>(args: SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinceCreateManyArgs>(args?: SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {ProvinceCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvinceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends ProvinceDeleteArgs>(args: SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinceUpdateArgs>(args: SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinceUpdateManyArgs>(args: SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {ProvinceUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvinceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends ProvinceUpsertArgs>(args: SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Province model
   */
  readonly fields: ProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipalities<T extends Province$municipalitiesArgs<ExtArgs> = {}>(args?: Subset<T, Province$municipalitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availableProducts<T extends Province$availableProductsArgs<ExtArgs> = {}>(args?: Subset<T, Province$availableProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Province model
   */
  interface ProvinceFieldRefs {
    readonly id: FieldRef<"Province", 'Int'>
    readonly name: FieldRef<"Province", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Province findUnique
   */
  export type ProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findFirst
   */
  export type ProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province create
   */
  export type ProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }

  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province createManyAndReturn
   */
  export type ProvinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province update
   */
  export type ProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province updateManyAndReturn
   */
  export type ProvinceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }

  /**
   * Province delete
   */
  export type ProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Province.municipalities
   */
  export type Province$municipalitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    where?: MunicipalityWhereInput
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    cursor?: MunicipalityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Province.availableProducts
   */
  export type Province$availableProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    where?: ProductAvailabilityWhereInput
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    cursor?: ProductAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAvailabilityScalarFieldEnum | ProductAvailabilityScalarFieldEnum[]
  }

  /**
   * Province without action
   */
  export type ProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
  }


  /**
   * Model Municipality
   */

  export type AggregateMunicipality = {
    _count: MunicipalityCountAggregateOutputType | null
    _avg: MunicipalityAvgAggregateOutputType | null
    _sum: MunicipalitySumAggregateOutputType | null
    _min: MunicipalityMinAggregateOutputType | null
    _max: MunicipalityMaxAggregateOutputType | null
  }

  export type MunicipalityAvgAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type MunicipalitySumAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type MunicipalityMinAggregateOutputType = {
    id: number | null
    name: string | null
    provinceId: number | null
  }

  export type MunicipalityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    provinceId: number | null
  }

  export type MunicipalityCountAggregateOutputType = {
    id: number
    name: number
    provinceId: number
    _all: number
  }


  export type MunicipalityAvgAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type MunicipalitySumAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type MunicipalityMinAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
  }

  export type MunicipalityMaxAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
  }

  export type MunicipalityCountAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
    _all?: true
  }

  export type MunicipalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipality to aggregate.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipalities
    **/
    _count?: true | MunicipalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipalityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipalitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipalityMaxAggregateInputType
  }

  export type GetMunicipalityAggregateType<T extends MunicipalityAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipality[P]>
      : GetScalarType<T[P], AggregateMunicipality[P]>
  }




  export type MunicipalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalityWhereInput
    orderBy?: MunicipalityOrderByWithAggregationInput | MunicipalityOrderByWithAggregationInput[]
    by: MunicipalityScalarFieldEnum[] | MunicipalityScalarFieldEnum
    having?: MunicipalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipalityCountAggregateInputType | true
    _avg?: MunicipalityAvgAggregateInputType
    _sum?: MunicipalitySumAggregateInputType
    _min?: MunicipalityMinAggregateInputType
    _max?: MunicipalityMaxAggregateInputType
  }

  export type MunicipalityGroupByOutputType = {
    id: number
    name: string
    provinceId: number
    _count: MunicipalityCountAggregateOutputType | null
    _avg: MunicipalityAvgAggregateOutputType | null
    _sum: MunicipalitySumAggregateOutputType | null
    _min: MunicipalityMinAggregateOutputType | null
    _max: MunicipalityMaxAggregateOutputType | null
  }

  type GetMunicipalityGroupByPayload<T extends MunicipalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipalityGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipalityGroupByOutputType[P]>
        }
      >
    >


  export type MunicipalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provinceId?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    towns?: boolean | Municipality$townsArgs<ExtArgs>
    availableProducts?: boolean | Municipality$availableProductsArgs<ExtArgs>
    _count?: boolean | MunicipalityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provinceId?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provinceId?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectScalar = {
    id?: boolean
    name?: boolean
    provinceId?: boolean
  }

  export type MunicipalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "provinceId", ExtArgs["result"]["municipality"]>
  export type MunicipalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    towns?: boolean | Municipality$townsArgs<ExtArgs>
    availableProducts?: boolean | Municipality$availableProductsArgs<ExtArgs>
    _count?: boolean | MunicipalityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MunicipalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }
  export type MunicipalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }

  export type $MunicipalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipality"
    objects: {
      province: Prisma.$ProvincePayload<ExtArgs>
      towns: Prisma.$TownPayload<ExtArgs>[]
      availableProducts: Prisma.$ProductAvailabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      provinceId: number
    }, ExtArgs["result"]["municipality"]>
    composites: {}
  }

  type MunicipalityGetPayload<S extends boolean | null | undefined | MunicipalityDefaultArgs> = $Result.GetResult<Prisma.$MunicipalityPayload, S>

  type MunicipalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipalityCountAggregateInputType | true
    }

  export interface MunicipalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipality'], meta: { name: 'Municipality' } }
    /**
     * Find zero or one Municipality that matches the filter.
     * @param {MunicipalityFindUniqueArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipalityFindUniqueArgs>(args: SelectSubset<T, MunicipalityFindUniqueArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipalityFindUniqueOrThrowArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipalityFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindFirstArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipalityFindFirstArgs>(args?: SelectSubset<T, MunicipalityFindFirstArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindFirstOrThrowArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipalityFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipalities
     * const municipalities = await prisma.municipality.findMany()
     * 
     * // Get first 10 Municipalities
     * const municipalities = await prisma.municipality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipalityWithIdOnly = await prisma.municipality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipalityFindManyArgs>(args?: SelectSubset<T, MunicipalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipality.
     * @param {MunicipalityCreateArgs} args - Arguments to create a Municipality.
     * @example
     * // Create one Municipality
     * const Municipality = await prisma.municipality.create({
     *   data: {
     *     // ... data to create a Municipality
     *   }
     * })
     * 
     */
    create<T extends MunicipalityCreateArgs>(args: SelectSubset<T, MunicipalityCreateArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipalities.
     * @param {MunicipalityCreateManyArgs} args - Arguments to create many Municipalities.
     * @example
     * // Create many Municipalities
     * const municipality = await prisma.municipality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipalityCreateManyArgs>(args?: SelectSubset<T, MunicipalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Municipalities and returns the data saved in the database.
     * @param {MunicipalityCreateManyAndReturnArgs} args - Arguments to create many Municipalities.
     * @example
     * // Create many Municipalities
     * const municipality = await prisma.municipality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Municipalities and only return the `id`
     * const municipalityWithIdOnly = await prisma.municipality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipalityCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Municipality.
     * @param {MunicipalityDeleteArgs} args - Arguments to delete one Municipality.
     * @example
     * // Delete one Municipality
     * const Municipality = await prisma.municipality.delete({
     *   where: {
     *     // ... filter to delete one Municipality
     *   }
     * })
     * 
     */
    delete<T extends MunicipalityDeleteArgs>(args: SelectSubset<T, MunicipalityDeleteArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipality.
     * @param {MunicipalityUpdateArgs} args - Arguments to update one Municipality.
     * @example
     * // Update one Municipality
     * const municipality = await prisma.municipality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipalityUpdateArgs>(args: SelectSubset<T, MunicipalityUpdateArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipalities.
     * @param {MunicipalityDeleteManyArgs} args - Arguments to filter Municipalities to delete.
     * @example
     * // Delete a few Municipalities
     * const { count } = await prisma.municipality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipalityDeleteManyArgs>(args?: SelectSubset<T, MunicipalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipalities
     * const municipality = await prisma.municipality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipalityUpdateManyArgs>(args: SelectSubset<T, MunicipalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipalities and returns the data updated in the database.
     * @param {MunicipalityUpdateManyAndReturnArgs} args - Arguments to update many Municipalities.
     * @example
     * // Update many Municipalities
     * const municipality = await prisma.municipality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Municipalities and only return the `id`
     * const municipalityWithIdOnly = await prisma.municipality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MunicipalityUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Municipality.
     * @param {MunicipalityUpsertArgs} args - Arguments to update or create a Municipality.
     * @example
     * // Update or create a Municipality
     * const municipality = await prisma.municipality.upsert({
     *   create: {
     *     // ... data to create a Municipality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipality we want to update
     *   }
     * })
     */
    upsert<T extends MunicipalityUpsertArgs>(args: SelectSubset<T, MunicipalityUpsertArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityCountArgs} args - Arguments to filter Municipalities to count.
     * @example
     * // Count the number of Municipalities
     * const count = await prisma.municipality.count({
     *   where: {
     *     // ... the filter for the Municipalities we want to count
     *   }
     * })
    **/
    count<T extends MunicipalityCountArgs>(
      args?: Subset<T, MunicipalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MunicipalityAggregateArgs>(args: Subset<T, MunicipalityAggregateArgs>): Prisma.PrismaPromise<GetMunicipalityAggregateType<T>>

    /**
     * Group by Municipality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MunicipalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipalityGroupByArgs['orderBy'] }
        : { orderBy?: MunicipalityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MunicipalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipality model
   */
  readonly fields: MunicipalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    towns<T extends Municipality$townsArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$townsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availableProducts<T extends Municipality$availableProductsArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$availableProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Municipality model
   */
  interface MunicipalityFieldRefs {
    readonly id: FieldRef<"Municipality", 'Int'>
    readonly name: FieldRef<"Municipality", 'String'>
    readonly provinceId: FieldRef<"Municipality", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Municipality findUnique
   */
  export type MunicipalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality findUniqueOrThrow
   */
  export type MunicipalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality findFirst
   */
  export type MunicipalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipalities.
     */
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality findFirstOrThrow
   */
  export type MunicipalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipalities.
     */
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality findMany
   */
  export type MunicipalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipalities to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality create
   */
  export type MunicipalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipality.
     */
    data: XOR<MunicipalityCreateInput, MunicipalityUncheckedCreateInput>
  }

  /**
   * Municipality createMany
   */
  export type MunicipalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipalities.
     */
    data: MunicipalityCreateManyInput | MunicipalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipality createManyAndReturn
   */
  export type MunicipalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * The data used to create many Municipalities.
     */
    data: MunicipalityCreateManyInput | MunicipalityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Municipality update
   */
  export type MunicipalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipality.
     */
    data: XOR<MunicipalityUpdateInput, MunicipalityUncheckedUpdateInput>
    /**
     * Choose, which Municipality to update.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality updateMany
   */
  export type MunicipalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipalities.
     */
    data: XOR<MunicipalityUpdateManyMutationInput, MunicipalityUncheckedUpdateManyInput>
    /**
     * Filter which Municipalities to update
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to update.
     */
    limit?: number
  }

  /**
   * Municipality updateManyAndReturn
   */
  export type MunicipalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * The data used to update Municipalities.
     */
    data: XOR<MunicipalityUpdateManyMutationInput, MunicipalityUncheckedUpdateManyInput>
    /**
     * Filter which Municipalities to update
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Municipality upsert
   */
  export type MunicipalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipality to update in case it exists.
     */
    where: MunicipalityWhereUniqueInput
    /**
     * In case the Municipality found by the `where` argument doesn't exist, create a new Municipality with this data.
     */
    create: XOR<MunicipalityCreateInput, MunicipalityUncheckedCreateInput>
    /**
     * In case the Municipality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipalityUpdateInput, MunicipalityUncheckedUpdateInput>
  }

  /**
   * Municipality delete
   */
  export type MunicipalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter which Municipality to delete.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality deleteMany
   */
  export type MunicipalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipalities to delete
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to delete.
     */
    limit?: number
  }

  /**
   * Municipality.towns
   */
  export type Municipality$townsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    where?: TownWhereInput
    orderBy?: TownOrderByWithRelationInput | TownOrderByWithRelationInput[]
    cursor?: TownWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TownScalarFieldEnum | TownScalarFieldEnum[]
  }

  /**
   * Municipality.availableProducts
   */
  export type Municipality$availableProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    where?: ProductAvailabilityWhereInput
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    cursor?: ProductAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAvailabilityScalarFieldEnum | ProductAvailabilityScalarFieldEnum[]
  }

  /**
   * Municipality without action
   */
  export type MunicipalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
  }


  /**
   * Model Town
   */

  export type AggregateTown = {
    _count: TownCountAggregateOutputType | null
    _avg: TownAvgAggregateOutputType | null
    _sum: TownSumAggregateOutputType | null
    _min: TownMinAggregateOutputType | null
    _max: TownMaxAggregateOutputType | null
  }

  export type TownAvgAggregateOutputType = {
    id: number | null
    municipalityId: number | null
  }

  export type TownSumAggregateOutputType = {
    id: number | null
    municipalityId: number | null
  }

  export type TownMinAggregateOutputType = {
    id: number | null
    name: string | null
    municipalityId: number | null
  }

  export type TownMaxAggregateOutputType = {
    id: number | null
    name: string | null
    municipalityId: number | null
  }

  export type TownCountAggregateOutputType = {
    id: number
    name: number
    municipalityId: number
    _all: number
  }


  export type TownAvgAggregateInputType = {
    id?: true
    municipalityId?: true
  }

  export type TownSumAggregateInputType = {
    id?: true
    municipalityId?: true
  }

  export type TownMinAggregateInputType = {
    id?: true
    name?: true
    municipalityId?: true
  }

  export type TownMaxAggregateInputType = {
    id?: true
    name?: true
    municipalityId?: true
  }

  export type TownCountAggregateInputType = {
    id?: true
    name?: true
    municipalityId?: true
    _all?: true
  }

  export type TownAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Town to aggregate.
     */
    where?: TownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towns to fetch.
     */
    orderBy?: TownOrderByWithRelationInput | TownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Towns
    **/
    _count?: true | TownCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TownAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TownSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TownMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TownMaxAggregateInputType
  }

  export type GetTownAggregateType<T extends TownAggregateArgs> = {
        [P in keyof T & keyof AggregateTown]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTown[P]>
      : GetScalarType<T[P], AggregateTown[P]>
  }




  export type TownGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TownWhereInput
    orderBy?: TownOrderByWithAggregationInput | TownOrderByWithAggregationInput[]
    by: TownScalarFieldEnum[] | TownScalarFieldEnum
    having?: TownScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TownCountAggregateInputType | true
    _avg?: TownAvgAggregateInputType
    _sum?: TownSumAggregateInputType
    _min?: TownMinAggregateInputType
    _max?: TownMaxAggregateInputType
  }

  export type TownGroupByOutputType = {
    id: number
    name: string
    municipalityId: number
    _count: TownCountAggregateOutputType | null
    _avg: TownAvgAggregateOutputType | null
    _sum: TownSumAggregateOutputType | null
    _min: TownMinAggregateOutputType | null
    _max: TownMaxAggregateOutputType | null
  }

  type GetTownGroupByPayload<T extends TownGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TownGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TownGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TownGroupByOutputType[P]>
            : GetScalarType<T[P], TownGroupByOutputType[P]>
        }
      >
    >


  export type TownSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    municipalityId?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    availableProducts?: boolean | Town$availableProductsArgs<ExtArgs>
    _count?: boolean | TownCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["town"]>

  export type TownSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    municipalityId?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["town"]>

  export type TownSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    municipalityId?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["town"]>

  export type TownSelectScalar = {
    id?: boolean
    name?: boolean
    municipalityId?: boolean
  }

  export type TownOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "municipalityId", ExtArgs["result"]["town"]>
  export type TownInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    availableProducts?: boolean | Town$availableProductsArgs<ExtArgs>
    _count?: boolean | TownCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TownIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type TownIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }

  export type $TownPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Town"
    objects: {
      municipality: Prisma.$MunicipalityPayload<ExtArgs>
      availableProducts: Prisma.$ProductAvailabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      municipalityId: number
    }, ExtArgs["result"]["town"]>
    composites: {}
  }

  type TownGetPayload<S extends boolean | null | undefined | TownDefaultArgs> = $Result.GetResult<Prisma.$TownPayload, S>

  type TownCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TownFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TownCountAggregateInputType | true
    }

  export interface TownDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Town'], meta: { name: 'Town' } }
    /**
     * Find zero or one Town that matches the filter.
     * @param {TownFindUniqueArgs} args - Arguments to find a Town
     * @example
     * // Get one Town
     * const town = await prisma.town.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TownFindUniqueArgs>(args: SelectSubset<T, TownFindUniqueArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Town that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TownFindUniqueOrThrowArgs} args - Arguments to find a Town
     * @example
     * // Get one Town
     * const town = await prisma.town.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TownFindUniqueOrThrowArgs>(args: SelectSubset<T, TownFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Town that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownFindFirstArgs} args - Arguments to find a Town
     * @example
     * // Get one Town
     * const town = await prisma.town.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TownFindFirstArgs>(args?: SelectSubset<T, TownFindFirstArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Town that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownFindFirstOrThrowArgs} args - Arguments to find a Town
     * @example
     * // Get one Town
     * const town = await prisma.town.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TownFindFirstOrThrowArgs>(args?: SelectSubset<T, TownFindFirstOrThrowArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Towns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Towns
     * const towns = await prisma.town.findMany()
     * 
     * // Get first 10 Towns
     * const towns = await prisma.town.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const townWithIdOnly = await prisma.town.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TownFindManyArgs>(args?: SelectSubset<T, TownFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Town.
     * @param {TownCreateArgs} args - Arguments to create a Town.
     * @example
     * // Create one Town
     * const Town = await prisma.town.create({
     *   data: {
     *     // ... data to create a Town
     *   }
     * })
     * 
     */
    create<T extends TownCreateArgs>(args: SelectSubset<T, TownCreateArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Towns.
     * @param {TownCreateManyArgs} args - Arguments to create many Towns.
     * @example
     * // Create many Towns
     * const town = await prisma.town.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TownCreateManyArgs>(args?: SelectSubset<T, TownCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Towns and returns the data saved in the database.
     * @param {TownCreateManyAndReturnArgs} args - Arguments to create many Towns.
     * @example
     * // Create many Towns
     * const town = await prisma.town.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Towns and only return the `id`
     * const townWithIdOnly = await prisma.town.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TownCreateManyAndReturnArgs>(args?: SelectSubset<T, TownCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Town.
     * @param {TownDeleteArgs} args - Arguments to delete one Town.
     * @example
     * // Delete one Town
     * const Town = await prisma.town.delete({
     *   where: {
     *     // ... filter to delete one Town
     *   }
     * })
     * 
     */
    delete<T extends TownDeleteArgs>(args: SelectSubset<T, TownDeleteArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Town.
     * @param {TownUpdateArgs} args - Arguments to update one Town.
     * @example
     * // Update one Town
     * const town = await prisma.town.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TownUpdateArgs>(args: SelectSubset<T, TownUpdateArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Towns.
     * @param {TownDeleteManyArgs} args - Arguments to filter Towns to delete.
     * @example
     * // Delete a few Towns
     * const { count } = await prisma.town.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TownDeleteManyArgs>(args?: SelectSubset<T, TownDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Towns
     * const town = await prisma.town.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TownUpdateManyArgs>(args: SelectSubset<T, TownUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towns and returns the data updated in the database.
     * @param {TownUpdateManyAndReturnArgs} args - Arguments to update many Towns.
     * @example
     * // Update many Towns
     * const town = await prisma.town.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Towns and only return the `id`
     * const townWithIdOnly = await prisma.town.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TownUpdateManyAndReturnArgs>(args: SelectSubset<T, TownUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Town.
     * @param {TownUpsertArgs} args - Arguments to update or create a Town.
     * @example
     * // Update or create a Town
     * const town = await prisma.town.upsert({
     *   create: {
     *     // ... data to create a Town
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Town we want to update
     *   }
     * })
     */
    upsert<T extends TownUpsertArgs>(args: SelectSubset<T, TownUpsertArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Towns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownCountArgs} args - Arguments to filter Towns to count.
     * @example
     * // Count the number of Towns
     * const count = await prisma.town.count({
     *   where: {
     *     // ... the filter for the Towns we want to count
     *   }
     * })
    **/
    count<T extends TownCountArgs>(
      args?: Subset<T, TownCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TownCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Town.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TownAggregateArgs>(args: Subset<T, TownAggregateArgs>): Prisma.PrismaPromise<GetTownAggregateType<T>>

    /**
     * Group by Town.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TownGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TownGroupByArgs['orderBy'] }
        : { orderBy?: TownGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TownGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTownGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Town model
   */
  readonly fields: TownFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Town.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TownClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipality<T extends MunicipalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipalityDefaultArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availableProducts<T extends Town$availableProductsArgs<ExtArgs> = {}>(args?: Subset<T, Town$availableProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Town model
   */
  interface TownFieldRefs {
    readonly id: FieldRef<"Town", 'Int'>
    readonly name: FieldRef<"Town", 'String'>
    readonly municipalityId: FieldRef<"Town", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Town findUnique
   */
  export type TownFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * Filter, which Town to fetch.
     */
    where: TownWhereUniqueInput
  }

  /**
   * Town findUniqueOrThrow
   */
  export type TownFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * Filter, which Town to fetch.
     */
    where: TownWhereUniqueInput
  }

  /**
   * Town findFirst
   */
  export type TownFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * Filter, which Town to fetch.
     */
    where?: TownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towns to fetch.
     */
    orderBy?: TownOrderByWithRelationInput | TownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towns.
     */
    cursor?: TownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towns.
     */
    distinct?: TownScalarFieldEnum | TownScalarFieldEnum[]
  }

  /**
   * Town findFirstOrThrow
   */
  export type TownFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * Filter, which Town to fetch.
     */
    where?: TownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towns to fetch.
     */
    orderBy?: TownOrderByWithRelationInput | TownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towns.
     */
    cursor?: TownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towns.
     */
    distinct?: TownScalarFieldEnum | TownScalarFieldEnum[]
  }

  /**
   * Town findMany
   */
  export type TownFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * Filter, which Towns to fetch.
     */
    where?: TownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towns to fetch.
     */
    orderBy?: TownOrderByWithRelationInput | TownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Towns.
     */
    cursor?: TownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towns.
     */
    skip?: number
    distinct?: TownScalarFieldEnum | TownScalarFieldEnum[]
  }

  /**
   * Town create
   */
  export type TownCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * The data needed to create a Town.
     */
    data: XOR<TownCreateInput, TownUncheckedCreateInput>
  }

  /**
   * Town createMany
   */
  export type TownCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Towns.
     */
    data: TownCreateManyInput | TownCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Town createManyAndReturn
   */
  export type TownCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * The data used to create many Towns.
     */
    data: TownCreateManyInput | TownCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Town update
   */
  export type TownUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * The data needed to update a Town.
     */
    data: XOR<TownUpdateInput, TownUncheckedUpdateInput>
    /**
     * Choose, which Town to update.
     */
    where: TownWhereUniqueInput
  }

  /**
   * Town updateMany
   */
  export type TownUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Towns.
     */
    data: XOR<TownUpdateManyMutationInput, TownUncheckedUpdateManyInput>
    /**
     * Filter which Towns to update
     */
    where?: TownWhereInput
    /**
     * Limit how many Towns to update.
     */
    limit?: number
  }

  /**
   * Town updateManyAndReturn
   */
  export type TownUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * The data used to update Towns.
     */
    data: XOR<TownUpdateManyMutationInput, TownUncheckedUpdateManyInput>
    /**
     * Filter which Towns to update
     */
    where?: TownWhereInput
    /**
     * Limit how many Towns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Town upsert
   */
  export type TownUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * The filter to search for the Town to update in case it exists.
     */
    where: TownWhereUniqueInput
    /**
     * In case the Town found by the `where` argument doesn't exist, create a new Town with this data.
     */
    create: XOR<TownCreateInput, TownUncheckedCreateInput>
    /**
     * In case the Town was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TownUpdateInput, TownUncheckedUpdateInput>
  }

  /**
   * Town delete
   */
  export type TownDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    /**
     * Filter which Town to delete.
     */
    where: TownWhereUniqueInput
  }

  /**
   * Town deleteMany
   */
  export type TownDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Towns to delete
     */
    where?: TownWhereInput
    /**
     * Limit how many Towns to delete.
     */
    limit?: number
  }

  /**
   * Town.availableProducts
   */
  export type Town$availableProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    where?: ProductAvailabilityWhereInput
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    cursor?: ProductAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAvailabilityScalarFieldEnum | ProductAvailabilityScalarFieldEnum[]
  }

  /**
   * Town without action
   */
  export type TownDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
  }


  /**
   * Model ProductAvailability
   */

  export type AggregateProductAvailability = {
    _count: ProductAvailabilityCountAggregateOutputType | null
    _avg: ProductAvailabilityAvgAggregateOutputType | null
    _sum: ProductAvailabilitySumAggregateOutputType | null
    _min: ProductAvailabilityMinAggregateOutputType | null
    _max: ProductAvailabilityMaxAggregateOutputType | null
  }

  export type ProductAvailabilityAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    provinceId: number | null
    municipalityId: number | null
    townId: number | null
  }

  export type ProductAvailabilitySumAggregateOutputType = {
    id: number | null
    productId: number | null
    provinceId: number | null
    municipalityId: number | null
    townId: number | null
  }

  export type ProductAvailabilityMinAggregateOutputType = {
    id: number | null
    productId: number | null
    provinceId: number | null
    municipalityId: number | null
    townId: number | null
    createdAt: Date | null
  }

  export type ProductAvailabilityMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    provinceId: number | null
    municipalityId: number | null
    townId: number | null
    createdAt: Date | null
  }

  export type ProductAvailabilityCountAggregateOutputType = {
    id: number
    productId: number
    provinceId: number
    municipalityId: number
    townId: number
    createdAt: number
    _all: number
  }


  export type ProductAvailabilityAvgAggregateInputType = {
    id?: true
    productId?: true
    provinceId?: true
    municipalityId?: true
    townId?: true
  }

  export type ProductAvailabilitySumAggregateInputType = {
    id?: true
    productId?: true
    provinceId?: true
    municipalityId?: true
    townId?: true
  }

  export type ProductAvailabilityMinAggregateInputType = {
    id?: true
    productId?: true
    provinceId?: true
    municipalityId?: true
    townId?: true
    createdAt?: true
  }

  export type ProductAvailabilityMaxAggregateInputType = {
    id?: true
    productId?: true
    provinceId?: true
    municipalityId?: true
    townId?: true
    createdAt?: true
  }

  export type ProductAvailabilityCountAggregateInputType = {
    id?: true
    productId?: true
    provinceId?: true
    municipalityId?: true
    townId?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAvailability to aggregate.
     */
    where?: ProductAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAvailabilities to fetch.
     */
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAvailabilities
    **/
    _count?: true | ProductAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAvailabilityMaxAggregateInputType
  }

  export type GetProductAvailabilityAggregateType<T extends ProductAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAvailability[P]>
      : GetScalarType<T[P], AggregateProductAvailability[P]>
  }




  export type ProductAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAvailabilityWhereInput
    orderBy?: ProductAvailabilityOrderByWithAggregationInput | ProductAvailabilityOrderByWithAggregationInput[]
    by: ProductAvailabilityScalarFieldEnum[] | ProductAvailabilityScalarFieldEnum
    having?: ProductAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAvailabilityCountAggregateInputType | true
    _avg?: ProductAvailabilityAvgAggregateInputType
    _sum?: ProductAvailabilitySumAggregateInputType
    _min?: ProductAvailabilityMinAggregateInputType
    _max?: ProductAvailabilityMaxAggregateInputType
  }

  export type ProductAvailabilityGroupByOutputType = {
    id: number
    productId: number
    provinceId: number | null
    municipalityId: number | null
    townId: number | null
    createdAt: Date
    _count: ProductAvailabilityCountAggregateOutputType | null
    _avg: ProductAvailabilityAvgAggregateOutputType | null
    _sum: ProductAvailabilitySumAggregateOutputType | null
    _min: ProductAvailabilityMinAggregateOutputType | null
    _max: ProductAvailabilityMaxAggregateOutputType | null
  }

  type GetProductAvailabilityGroupByPayload<T extends ProductAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type ProductAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    provinceId?: boolean
    municipalityId?: boolean
    townId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    province?: boolean | ProductAvailability$provinceArgs<ExtArgs>
    municipality?: boolean | ProductAvailability$municipalityArgs<ExtArgs>
    town?: boolean | ProductAvailability$townArgs<ExtArgs>
  }, ExtArgs["result"]["productAvailability"]>

  export type ProductAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    provinceId?: boolean
    municipalityId?: boolean
    townId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    province?: boolean | ProductAvailability$provinceArgs<ExtArgs>
    municipality?: boolean | ProductAvailability$municipalityArgs<ExtArgs>
    town?: boolean | ProductAvailability$townArgs<ExtArgs>
  }, ExtArgs["result"]["productAvailability"]>

  export type ProductAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    provinceId?: boolean
    municipalityId?: boolean
    townId?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    province?: boolean | ProductAvailability$provinceArgs<ExtArgs>
    municipality?: boolean | ProductAvailability$municipalityArgs<ExtArgs>
    town?: boolean | ProductAvailability$townArgs<ExtArgs>
  }, ExtArgs["result"]["productAvailability"]>

  export type ProductAvailabilitySelectScalar = {
    id?: boolean
    productId?: boolean
    provinceId?: boolean
    municipalityId?: boolean
    townId?: boolean
    createdAt?: boolean
  }

  export type ProductAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "provinceId" | "municipalityId" | "townId" | "createdAt", ExtArgs["result"]["productAvailability"]>
  export type ProductAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    province?: boolean | ProductAvailability$provinceArgs<ExtArgs>
    municipality?: boolean | ProductAvailability$municipalityArgs<ExtArgs>
    town?: boolean | ProductAvailability$townArgs<ExtArgs>
  }
  export type ProductAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    province?: boolean | ProductAvailability$provinceArgs<ExtArgs>
    municipality?: boolean | ProductAvailability$municipalityArgs<ExtArgs>
    town?: boolean | ProductAvailability$townArgs<ExtArgs>
  }
  export type ProductAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    province?: boolean | ProductAvailability$provinceArgs<ExtArgs>
    municipality?: boolean | ProductAvailability$municipalityArgs<ExtArgs>
    town?: boolean | ProductAvailability$townArgs<ExtArgs>
  }

  export type $ProductAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAvailability"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      province: Prisma.$ProvincePayload<ExtArgs> | null
      municipality: Prisma.$MunicipalityPayload<ExtArgs> | null
      town: Prisma.$TownPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      provinceId: number | null
      municipalityId: number | null
      townId: number | null
      createdAt: Date
    }, ExtArgs["result"]["productAvailability"]>
    composites: {}
  }

  type ProductAvailabilityGetPayload<S extends boolean | null | undefined | ProductAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$ProductAvailabilityPayload, S>

  type ProductAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductAvailabilityCountAggregateInputType | true
    }

  export interface ProductAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAvailability'], meta: { name: 'ProductAvailability' } }
    /**
     * Find zero or one ProductAvailability that matches the filter.
     * @param {ProductAvailabilityFindUniqueArgs} args - Arguments to find a ProductAvailability
     * @example
     * // Get one ProductAvailability
     * const productAvailability = await prisma.productAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAvailabilityFindUniqueArgs>(args: SelectSubset<T, ProductAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a ProductAvailability
     * @example
     * // Get one ProductAvailability
     * const productAvailability = await prisma.productAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAvailabilityFindFirstArgs} args - Arguments to find a ProductAvailability
     * @example
     * // Get one ProductAvailability
     * const productAvailability = await prisma.productAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAvailabilityFindFirstArgs>(args?: SelectSubset<T, ProductAvailabilityFindFirstArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAvailabilityFindFirstOrThrowArgs} args - Arguments to find a ProductAvailability
     * @example
     * // Get one ProductAvailability
     * const productAvailability = await prisma.productAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAvailabilities
     * const productAvailabilities = await prisma.productAvailability.findMany()
     * 
     * // Get first 10 ProductAvailabilities
     * const productAvailabilities = await prisma.productAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productAvailabilityWithIdOnly = await prisma.productAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductAvailabilityFindManyArgs>(args?: SelectSubset<T, ProductAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductAvailability.
     * @param {ProductAvailabilityCreateArgs} args - Arguments to create a ProductAvailability.
     * @example
     * // Create one ProductAvailability
     * const ProductAvailability = await prisma.productAvailability.create({
     *   data: {
     *     // ... data to create a ProductAvailability
     *   }
     * })
     * 
     */
    create<T extends ProductAvailabilityCreateArgs>(args: SelectSubset<T, ProductAvailabilityCreateArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductAvailabilities.
     * @param {ProductAvailabilityCreateManyArgs} args - Arguments to create many ProductAvailabilities.
     * @example
     * // Create many ProductAvailabilities
     * const productAvailability = await prisma.productAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductAvailabilityCreateManyArgs>(args?: SelectSubset<T, ProductAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductAvailabilities and returns the data saved in the database.
     * @param {ProductAvailabilityCreateManyAndReturnArgs} args - Arguments to create many ProductAvailabilities.
     * @example
     * // Create many ProductAvailabilities
     * const productAvailability = await prisma.productAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductAvailabilities and only return the `id`
     * const productAvailabilityWithIdOnly = await prisma.productAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductAvailability.
     * @param {ProductAvailabilityDeleteArgs} args - Arguments to delete one ProductAvailability.
     * @example
     * // Delete one ProductAvailability
     * const ProductAvailability = await prisma.productAvailability.delete({
     *   where: {
     *     // ... filter to delete one ProductAvailability
     *   }
     * })
     * 
     */
    delete<T extends ProductAvailabilityDeleteArgs>(args: SelectSubset<T, ProductAvailabilityDeleteArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductAvailability.
     * @param {ProductAvailabilityUpdateArgs} args - Arguments to update one ProductAvailability.
     * @example
     * // Update one ProductAvailability
     * const productAvailability = await prisma.productAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductAvailabilityUpdateArgs>(args: SelectSubset<T, ProductAvailabilityUpdateArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductAvailabilities.
     * @param {ProductAvailabilityDeleteManyArgs} args - Arguments to filter ProductAvailabilities to delete.
     * @example
     * // Delete a few ProductAvailabilities
     * const { count } = await prisma.productAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductAvailabilityDeleteManyArgs>(args?: SelectSubset<T, ProductAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAvailabilities
     * const productAvailability = await prisma.productAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductAvailabilityUpdateManyArgs>(args: SelectSubset<T, ProductAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAvailabilities and returns the data updated in the database.
     * @param {ProductAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many ProductAvailabilities.
     * @example
     * // Update many ProductAvailabilities
     * const productAvailability = await prisma.productAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductAvailabilities and only return the `id`
     * const productAvailabilityWithIdOnly = await prisma.productAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductAvailability.
     * @param {ProductAvailabilityUpsertArgs} args - Arguments to update or create a ProductAvailability.
     * @example
     * // Update or create a ProductAvailability
     * const productAvailability = await prisma.productAvailability.upsert({
     *   create: {
     *     // ... data to create a ProductAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAvailability we want to update
     *   }
     * })
     */
    upsert<T extends ProductAvailabilityUpsertArgs>(args: SelectSubset<T, ProductAvailabilityUpsertArgs<ExtArgs>>): Prisma__ProductAvailabilityClient<$Result.GetResult<Prisma.$ProductAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAvailabilityCountArgs} args - Arguments to filter ProductAvailabilities to count.
     * @example
     * // Count the number of ProductAvailabilities
     * const count = await prisma.productAvailability.count({
     *   where: {
     *     // ... the filter for the ProductAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends ProductAvailabilityCountArgs>(
      args?: Subset<T, ProductAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAvailabilityAggregateArgs>(args: Subset<T, ProductAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetProductAvailabilityAggregateType<T>>

    /**
     * Group by ProductAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: ProductAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAvailability model
   */
  readonly fields: ProductAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    province<T extends ProductAvailability$provinceArgs<ExtArgs> = {}>(args?: Subset<T, ProductAvailability$provinceArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    municipality<T extends ProductAvailability$municipalityArgs<ExtArgs> = {}>(args?: Subset<T, ProductAvailability$municipalityArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    town<T extends ProductAvailability$townArgs<ExtArgs> = {}>(args?: Subset<T, ProductAvailability$townArgs<ExtArgs>>): Prisma__TownClient<$Result.GetResult<Prisma.$TownPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductAvailability model
   */
  interface ProductAvailabilityFieldRefs {
    readonly id: FieldRef<"ProductAvailability", 'Int'>
    readonly productId: FieldRef<"ProductAvailability", 'Int'>
    readonly provinceId: FieldRef<"ProductAvailability", 'Int'>
    readonly municipalityId: FieldRef<"ProductAvailability", 'Int'>
    readonly townId: FieldRef<"ProductAvailability", 'Int'>
    readonly createdAt: FieldRef<"ProductAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductAvailability findUnique
   */
  export type ProductAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProductAvailability to fetch.
     */
    where: ProductAvailabilityWhereUniqueInput
  }

  /**
   * ProductAvailability findUniqueOrThrow
   */
  export type ProductAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProductAvailability to fetch.
     */
    where: ProductAvailabilityWhereUniqueInput
  }

  /**
   * ProductAvailability findFirst
   */
  export type ProductAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProductAvailability to fetch.
     */
    where?: ProductAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAvailabilities to fetch.
     */
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAvailabilities.
     */
    cursor?: ProductAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAvailabilities.
     */
    distinct?: ProductAvailabilityScalarFieldEnum | ProductAvailabilityScalarFieldEnum[]
  }

  /**
   * ProductAvailability findFirstOrThrow
   */
  export type ProductAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProductAvailability to fetch.
     */
    where?: ProductAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAvailabilities to fetch.
     */
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAvailabilities.
     */
    cursor?: ProductAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAvailabilities.
     */
    distinct?: ProductAvailabilityScalarFieldEnum | ProductAvailabilityScalarFieldEnum[]
  }

  /**
   * ProductAvailability findMany
   */
  export type ProductAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProductAvailabilities to fetch.
     */
    where?: ProductAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAvailabilities to fetch.
     */
    orderBy?: ProductAvailabilityOrderByWithRelationInput | ProductAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAvailabilities.
     */
    cursor?: ProductAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAvailabilities.
     */
    skip?: number
    distinct?: ProductAvailabilityScalarFieldEnum | ProductAvailabilityScalarFieldEnum[]
  }

  /**
   * ProductAvailability create
   */
  export type ProductAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductAvailability.
     */
    data: XOR<ProductAvailabilityCreateInput, ProductAvailabilityUncheckedCreateInput>
  }

  /**
   * ProductAvailability createMany
   */
  export type ProductAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAvailabilities.
     */
    data: ProductAvailabilityCreateManyInput | ProductAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductAvailability createManyAndReturn
   */
  export type ProductAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many ProductAvailabilities.
     */
    data: ProductAvailabilityCreateManyInput | ProductAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAvailability update
   */
  export type ProductAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductAvailability.
     */
    data: XOR<ProductAvailabilityUpdateInput, ProductAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which ProductAvailability to update.
     */
    where: ProductAvailabilityWhereUniqueInput
  }

  /**
   * ProductAvailability updateMany
   */
  export type ProductAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAvailabilities.
     */
    data: XOR<ProductAvailabilityUpdateManyMutationInput, ProductAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which ProductAvailabilities to update
     */
    where?: ProductAvailabilityWhereInput
    /**
     * Limit how many ProductAvailabilities to update.
     */
    limit?: number
  }

  /**
   * ProductAvailability updateManyAndReturn
   */
  export type ProductAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update ProductAvailabilities.
     */
    data: XOR<ProductAvailabilityUpdateManyMutationInput, ProductAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which ProductAvailabilities to update
     */
    where?: ProductAvailabilityWhereInput
    /**
     * Limit how many ProductAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAvailability upsert
   */
  export type ProductAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductAvailability to update in case it exists.
     */
    where: ProductAvailabilityWhereUniqueInput
    /**
     * In case the ProductAvailability found by the `where` argument doesn't exist, create a new ProductAvailability with this data.
     */
    create: XOR<ProductAvailabilityCreateInput, ProductAvailabilityUncheckedCreateInput>
    /**
     * In case the ProductAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAvailabilityUpdateInput, ProductAvailabilityUncheckedUpdateInput>
  }

  /**
   * ProductAvailability delete
   */
  export type ProductAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which ProductAvailability to delete.
     */
    where: ProductAvailabilityWhereUniqueInput
  }

  /**
   * ProductAvailability deleteMany
   */
  export type ProductAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAvailabilities to delete
     */
    where?: ProductAvailabilityWhereInput
    /**
     * Limit how many ProductAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * ProductAvailability.province
   */
  export type ProductAvailability$provinceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    where?: ProvinceWhereInput
  }

  /**
   * ProductAvailability.municipality
   */
  export type ProductAvailability$municipalityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    where?: MunicipalityWhereInput
  }

  /**
   * ProductAvailability.town
   */
  export type ProductAvailability$townArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Town
     */
    select?: TownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Town
     */
    omit?: TownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownInclude<ExtArgs> | null
    where?: TownWhereInput
  }

  /**
   * ProductAvailability without action
   */
  export type ProductAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAvailability
     */
    select?: ProductAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAvailability
     */
    omit?: ProductAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    baseRate: 'baseRate',
    isDefault: 'isDefault',
    isBase: 'isBase',
    symbol: 'symbol'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    priceBaseCurrency: 'priceBaseCurrency',
    priceBaseDiscount: 'priceBaseDiscount',
    stock: 'stock',
    image: 'image',
    discountPercentage: 'discountPercentage',
    freeShipping: 'freeShipping',
    categoryId: 'categoryId',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    itsNew: 'itsNew',
    brand: 'brand'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    cover: 'cover',
    image: 'image'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PriceScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    currencyId: 'currencyId',
    value: 'value',
    isFixed: 'isFixed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const MunicipalityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    provinceId: 'provinceId'
  };

  export type MunicipalityScalarFieldEnum = (typeof MunicipalityScalarFieldEnum)[keyof typeof MunicipalityScalarFieldEnum]


  export const TownScalarFieldEnum: {
    id: 'id',
    name: 'name',
    municipalityId: 'municipalityId'
  };

  export type TownScalarFieldEnum = (typeof TownScalarFieldEnum)[keyof typeof TownScalarFieldEnum]


  export const ProductAvailabilityScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    provinceId: 'provinceId',
    municipalityId: 'municipalityId',
    townId: 'townId',
    createdAt: 'createdAt'
  };

  export type ProductAvailabilityScalarFieldEnum = (typeof ProductAvailabilityScalarFieldEnum)[keyof typeof ProductAvailabilityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    id?: IntFilter<"Currency"> | number
    name?: StringFilter<"Currency"> | string
    baseRate?: DecimalFilter<"Currency"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFilter<"Currency"> | boolean
    isBase?: BoolFilter<"Currency"> | boolean
    symbol?: StringFilter<"Currency"> | string
    Price?: PriceListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    baseRate?: SortOrder
    isDefault?: SortOrder
    isBase?: SortOrder
    symbol?: SortOrder
    Price?: PriceOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    name?: StringFilter<"Currency"> | string
    baseRate?: DecimalFilter<"Currency"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFilter<"Currency"> | boolean
    isBase?: BoolFilter<"Currency"> | boolean
    symbol?: StringFilter<"Currency"> | string
    Price?: PriceListRelationFilter
  }, "id">

  export type CurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    baseRate?: SortOrder
    isDefault?: SortOrder
    isBase?: SortOrder
    symbol?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Currency"> | number
    name?: StringWithAggregatesFilter<"Currency"> | string
    baseRate?: DecimalWithAggregatesFilter<"Currency"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolWithAggregatesFilter<"Currency"> | boolean
    isBase?: BoolWithAggregatesFilter<"Currency"> | boolean
    symbol?: StringWithAggregatesFilter<"Currency"> | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    Product?: ProductListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    Product?: ProductListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    priceBaseCurrency?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: FloatNullableFilter<"Product"> | number | null
    stock?: IntFilter<"Product"> | number
    image?: StringFilter<"Product"> | string
    discountPercentage?: FloatNullableFilter<"Product"> | number | null
    freeShipping?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    companyId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    itsNew?: BoolFilter<"Product"> | boolean
    brand?: StringNullableFilter<"Product"> | string | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    Price?: PriceListRelationFilter
    availableLocations?: ProductAvailabilityListRelationFilter
    ProductImage?: ProductImageListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceBaseCurrency?: SortOrder
    priceBaseDiscount?: SortOrderInput | SortOrder
    stock?: SortOrder
    image?: SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    freeShipping?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itsNew?: SortOrder
    brand?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    Price?: PriceOrderByRelationAggregateInput
    availableLocations?: ProductAvailabilityOrderByRelationAggregateInput
    ProductImage?: ProductImageOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    priceBaseCurrency?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: FloatNullableFilter<"Product"> | number | null
    stock?: IntFilter<"Product"> | number
    image?: StringFilter<"Product"> | string
    discountPercentage?: FloatNullableFilter<"Product"> | number | null
    freeShipping?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    companyId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    itsNew?: BoolFilter<"Product"> | boolean
    brand?: StringNullableFilter<"Product"> | string | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    Price?: PriceListRelationFilter
    availableLocations?: ProductAvailabilityListRelationFilter
    ProductImage?: ProductImageListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceBaseCurrency?: SortOrder
    priceBaseDiscount?: SortOrderInput | SortOrder
    stock?: SortOrder
    image?: SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    freeShipping?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itsNew?: SortOrder
    brand?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    priceBaseCurrency?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    stock?: IntWithAggregatesFilter<"Product"> | number
    image?: StringWithAggregatesFilter<"Product"> | string
    discountPercentage?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    freeShipping?: BoolWithAggregatesFilter<"Product"> | boolean
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    companyId?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    itsNew?: BoolWithAggregatesFilter<"Product"> | boolean
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    cover?: BoolFilter<"ProductImage"> | boolean
    image?: StringFilter<"ProductImage"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    cover?: SortOrder
    image?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: IntFilter<"ProductImage"> | number
    cover?: BoolFilter<"ProductImage"> | boolean
    image?: StringFilter<"ProductImage"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    cover?: SortOrder
    image?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    productId?: IntWithAggregatesFilter<"ProductImage"> | number
    cover?: BoolWithAggregatesFilter<"ProductImage"> | boolean
    image?: StringWithAggregatesFilter<"ProductImage"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    image?: StringNullableFilter<"Category"> | string | null
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    image?: StringNullableFilter<"Category"> | string | null
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    id?: IntFilter<"Price"> | number
    productId?: IntFilter<"Price"> | number
    currencyId?: IntFilter<"Price"> | number
    value?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFilter<"Price"> | boolean
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    isFixed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_currencyId?: PriceProductIdCurrencyIdCompoundUniqueInput
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    productId?: IntFilter<"Price"> | number
    currencyId?: IntFilter<"Price"> | number
    value?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFilter<"Price"> | boolean
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }, "id" | "productId_currencyId">

  export type PriceOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    isFixed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Price"> | number
    productId?: IntWithAggregatesFilter<"Price"> | number
    currencyId?: IntWithAggregatesFilter<"Price"> | number
    value?: DecimalWithAggregatesFilter<"Price"> | Decimal | DecimalJsLike | number | string
    isFixed?: BoolWithAggregatesFilter<"Price"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
  }

  export type ProvinceWhereInput = {
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    id?: IntFilter<"Province"> | number
    name?: StringFilter<"Province"> | string
    municipalities?: MunicipalityListRelationFilter
    availableProducts?: ProductAvailabilityListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    municipalities?: MunicipalityOrderByRelationAggregateInput
    availableProducts?: ProductAvailabilityOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    municipalities?: MunicipalityListRelationFilter
    availableProducts?: ProductAvailabilityListRelationFilter
  }, "id" | "name">

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _avg?: ProvinceAvgOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
    _sum?: ProvinceSumOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    OR?: ProvinceScalarWhereWithAggregatesInput[]
    NOT?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Province"> | number
    name?: StringWithAggregatesFilter<"Province"> | string
  }

  export type MunicipalityWhereInput = {
    AND?: MunicipalityWhereInput | MunicipalityWhereInput[]
    OR?: MunicipalityWhereInput[]
    NOT?: MunicipalityWhereInput | MunicipalityWhereInput[]
    id?: IntFilter<"Municipality"> | number
    name?: StringFilter<"Municipality"> | string
    provinceId?: IntFilter<"Municipality"> | number
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    towns?: TownListRelationFilter
    availableProducts?: ProductAvailabilityListRelationFilter
  }

  export type MunicipalityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    province?: ProvinceOrderByWithRelationInput
    towns?: TownOrderByRelationAggregateInput
    availableProducts?: ProductAvailabilityOrderByRelationAggregateInput
  }

  export type MunicipalityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_provinceId?: MunicipalityNameProvinceIdCompoundUniqueInput
    AND?: MunicipalityWhereInput | MunicipalityWhereInput[]
    OR?: MunicipalityWhereInput[]
    NOT?: MunicipalityWhereInput | MunicipalityWhereInput[]
    name?: StringFilter<"Municipality"> | string
    provinceId?: IntFilter<"Municipality"> | number
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    towns?: TownListRelationFilter
    availableProducts?: ProductAvailabilityListRelationFilter
  }, "id" | "name_provinceId">

  export type MunicipalityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    _count?: MunicipalityCountOrderByAggregateInput
    _avg?: MunicipalityAvgOrderByAggregateInput
    _max?: MunicipalityMaxOrderByAggregateInput
    _min?: MunicipalityMinOrderByAggregateInput
    _sum?: MunicipalitySumOrderByAggregateInput
  }

  export type MunicipalityScalarWhereWithAggregatesInput = {
    AND?: MunicipalityScalarWhereWithAggregatesInput | MunicipalityScalarWhereWithAggregatesInput[]
    OR?: MunicipalityScalarWhereWithAggregatesInput[]
    NOT?: MunicipalityScalarWhereWithAggregatesInput | MunicipalityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Municipality"> | number
    name?: StringWithAggregatesFilter<"Municipality"> | string
    provinceId?: IntWithAggregatesFilter<"Municipality"> | number
  }

  export type TownWhereInput = {
    AND?: TownWhereInput | TownWhereInput[]
    OR?: TownWhereInput[]
    NOT?: TownWhereInput | TownWhereInput[]
    id?: IntFilter<"Town"> | number
    name?: StringFilter<"Town"> | string
    municipalityId?: IntFilter<"Town"> | number
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
    availableProducts?: ProductAvailabilityListRelationFilter
  }

  export type TownOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    municipalityId?: SortOrder
    municipality?: MunicipalityOrderByWithRelationInput
    availableProducts?: ProductAvailabilityOrderByRelationAggregateInput
  }

  export type TownWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_municipalityId?: TownNameMunicipalityIdCompoundUniqueInput
    AND?: TownWhereInput | TownWhereInput[]
    OR?: TownWhereInput[]
    NOT?: TownWhereInput | TownWhereInput[]
    name?: StringFilter<"Town"> | string
    municipalityId?: IntFilter<"Town"> | number
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
    availableProducts?: ProductAvailabilityListRelationFilter
  }, "id" | "name_municipalityId">

  export type TownOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    municipalityId?: SortOrder
    _count?: TownCountOrderByAggregateInput
    _avg?: TownAvgOrderByAggregateInput
    _max?: TownMaxOrderByAggregateInput
    _min?: TownMinOrderByAggregateInput
    _sum?: TownSumOrderByAggregateInput
  }

  export type TownScalarWhereWithAggregatesInput = {
    AND?: TownScalarWhereWithAggregatesInput | TownScalarWhereWithAggregatesInput[]
    OR?: TownScalarWhereWithAggregatesInput[]
    NOT?: TownScalarWhereWithAggregatesInput | TownScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Town"> | number
    name?: StringWithAggregatesFilter<"Town"> | string
    municipalityId?: IntWithAggregatesFilter<"Town"> | number
  }

  export type ProductAvailabilityWhereInput = {
    AND?: ProductAvailabilityWhereInput | ProductAvailabilityWhereInput[]
    OR?: ProductAvailabilityWhereInput[]
    NOT?: ProductAvailabilityWhereInput | ProductAvailabilityWhereInput[]
    id?: IntFilter<"ProductAvailability"> | number
    productId?: IntFilter<"ProductAvailability"> | number
    provinceId?: IntNullableFilter<"ProductAvailability"> | number | null
    municipalityId?: IntNullableFilter<"ProductAvailability"> | number | null
    townId?: IntNullableFilter<"ProductAvailability"> | number | null
    createdAt?: DateTimeFilter<"ProductAvailability"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    province?: XOR<ProvinceNullableScalarRelationFilter, ProvinceWhereInput> | null
    municipality?: XOR<MunicipalityNullableScalarRelationFilter, MunicipalityWhereInput> | null
    town?: XOR<TownNullableScalarRelationFilter, TownWhereInput> | null
  }

  export type ProductAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    provinceId?: SortOrderInput | SortOrder
    municipalityId?: SortOrderInput | SortOrder
    townId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    province?: ProvinceOrderByWithRelationInput
    municipality?: MunicipalityOrderByWithRelationInput
    town?: TownOrderByWithRelationInput
  }

  export type ProductAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_provinceId_municipalityId_townId?: ProductAvailabilityProductIdProvinceIdMunicipalityIdTownIdCompoundUniqueInput
    AND?: ProductAvailabilityWhereInput | ProductAvailabilityWhereInput[]
    OR?: ProductAvailabilityWhereInput[]
    NOT?: ProductAvailabilityWhereInput | ProductAvailabilityWhereInput[]
    productId?: IntFilter<"ProductAvailability"> | number
    provinceId?: IntNullableFilter<"ProductAvailability"> | number | null
    municipalityId?: IntNullableFilter<"ProductAvailability"> | number | null
    townId?: IntNullableFilter<"ProductAvailability"> | number | null
    createdAt?: DateTimeFilter<"ProductAvailability"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    province?: XOR<ProvinceNullableScalarRelationFilter, ProvinceWhereInput> | null
    municipality?: XOR<MunicipalityNullableScalarRelationFilter, MunicipalityWhereInput> | null
    town?: XOR<TownNullableScalarRelationFilter, TownWhereInput> | null
  }, "id" | "productId_provinceId_municipalityId_townId">

  export type ProductAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    provinceId?: SortOrderInput | SortOrder
    municipalityId?: SortOrderInput | SortOrder
    townId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductAvailabilityCountOrderByAggregateInput
    _avg?: ProductAvailabilityAvgOrderByAggregateInput
    _max?: ProductAvailabilityMaxOrderByAggregateInput
    _min?: ProductAvailabilityMinOrderByAggregateInput
    _sum?: ProductAvailabilitySumOrderByAggregateInput
  }

  export type ProductAvailabilityScalarWhereWithAggregatesInput = {
    AND?: ProductAvailabilityScalarWhereWithAggregatesInput | ProductAvailabilityScalarWhereWithAggregatesInput[]
    OR?: ProductAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: ProductAvailabilityScalarWhereWithAggregatesInput | ProductAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductAvailability"> | number
    productId?: IntWithAggregatesFilter<"ProductAvailability"> | number
    provinceId?: IntNullableWithAggregatesFilter<"ProductAvailability"> | number | null
    municipalityId?: IntNullableWithAggregatesFilter<"ProductAvailability"> | number | null
    townId?: IntNullableWithAggregatesFilter<"ProductAvailability"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductAvailability"> | Date | string
  }

  export type CurrencyCreateInput = {
    name: string
    baseRate: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isBase?: boolean
    symbol: string
    Price?: PriceCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    id?: number
    name: string
    baseRate: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isBase?: boolean
    symbol: string
    Price?: PriceUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isBase?: BoolFieldUpdateOperationsInput | boolean
    symbol?: StringFieldUpdateOperationsInput | string
    Price?: PriceUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isBase?: BoolFieldUpdateOperationsInput | boolean
    symbol?: StringFieldUpdateOperationsInput | string
    Price?: PriceUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    id?: number
    name: string
    baseRate: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isBase?: boolean
    symbol: string
  }

  export type CurrencyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isBase?: BoolFieldUpdateOperationsInput | boolean
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isBase?: BoolFieldUpdateOperationsInput | boolean
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateInput = {
    name: string
    Product?: ProductCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    Product?: ProductUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductInput
    Price?: PriceCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    categoryId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    Price?: PriceUncheckedCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityUncheckedCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput
    Price?: PriceUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: PriceUncheckedUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUncheckedUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    categoryId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductImageCreateInput = {
    cover?: boolean
    image: string
    product: ProductCreateNestedOneWithoutProductImageInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    productId: number
    cover?: boolean
    image: string
  }

  export type ProductImageUpdateInput = {
    cover?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutProductImageNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    cover?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageCreateManyInput = {
    id?: number
    productId: number
    cover?: boolean
    image: string
  }

  export type ProductImageUpdateManyMutationInput = {
    cover?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    cover?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceCreateInput = {
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutPriceInput
    currency: CurrencyCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateInput = {
    id?: number
    productId: number
    currencyId: number
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceUpdateInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPriceNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateManyInput = {
    id?: number
    productId: number
    currencyId: number
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceUpdateManyMutationInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvinceCreateInput = {
    name: string
    municipalities?: MunicipalityCreateNestedManyWithoutProvinceInput
    availableProducts?: ProductAvailabilityCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id?: number
    name: string
    municipalities?: MunicipalityUncheckedCreateNestedManyWithoutProvinceInput
    availableProducts?: ProductAvailabilityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    municipalities?: MunicipalityUpdateManyWithoutProvinceNestedInput
    availableProducts?: ProductAvailabilityUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    municipalities?: MunicipalityUncheckedUpdateManyWithoutProvinceNestedInput
    availableProducts?: ProductAvailabilityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id?: number
    name: string
  }

  export type ProvinceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityCreateInput = {
    name: string
    province: ProvinceCreateNestedOneWithoutMunicipalitiesInput
    towns?: TownCreateNestedManyWithoutMunicipalityInput
    availableProducts?: ProductAvailabilityCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateInput = {
    id?: number
    name: string
    provinceId: number
    towns?: TownUncheckedCreateNestedManyWithoutMunicipalityInput
    availableProducts?: ProductAvailabilityUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutMunicipalitiesNestedInput
    towns?: TownUpdateManyWithoutMunicipalityNestedInput
    availableProducts?: ProductAvailabilityUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    towns?: TownUncheckedUpdateManyWithoutMunicipalityNestedInput
    availableProducts?: ProductAvailabilityUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityCreateManyInput = {
    id?: number
    name: string
    provinceId: number
  }

  export type MunicipalityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type TownCreateInput = {
    name: string
    municipality: MunicipalityCreateNestedOneWithoutTownsInput
    availableProducts?: ProductAvailabilityCreateNestedManyWithoutTownInput
  }

  export type TownUncheckedCreateInput = {
    id?: number
    name: string
    municipalityId: number
    availableProducts?: ProductAvailabilityUncheckedCreateNestedManyWithoutTownInput
  }

  export type TownUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    municipality?: MunicipalityUpdateOneRequiredWithoutTownsNestedInput
    availableProducts?: ProductAvailabilityUpdateManyWithoutTownNestedInput
  }

  export type TownUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    municipalityId?: IntFieldUpdateOperationsInput | number
    availableProducts?: ProductAvailabilityUncheckedUpdateManyWithoutTownNestedInput
  }

  export type TownCreateManyInput = {
    id?: number
    name: string
    municipalityId: number
  }

  export type TownUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TownUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    municipalityId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductAvailabilityCreateInput = {
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAvailableLocationsInput
    province?: ProvinceCreateNestedOneWithoutAvailableProductsInput
    municipality?: MunicipalityCreateNestedOneWithoutAvailableProductsInput
    town?: TownCreateNestedOneWithoutAvailableProductsInput
  }

  export type ProductAvailabilityUncheckedCreateInput = {
    id?: number
    productId: number
    provinceId?: number | null
    municipalityId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type ProductAvailabilityUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAvailableLocationsNestedInput
    province?: ProvinceUpdateOneWithoutAvailableProductsNestedInput
    municipality?: MunicipalityUpdateOneWithoutAvailableProductsNestedInput
    town?: TownUpdateOneWithoutAvailableProductsNestedInput
  }

  export type ProductAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityCreateManyInput = {
    id?: number
    productId: number
    provinceId?: number | null
    municipalityId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type ProductAvailabilityUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseRate?: SortOrder
    isDefault?: SortOrder
    isBase?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    id?: SortOrder
    baseRate?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseRate?: SortOrder
    isDefault?: SortOrder
    isBase?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseRate?: SortOrder
    isDefault?: SortOrder
    isBase?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    id?: SortOrder
    baseRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ProductAvailabilityListRelationFilter = {
    every?: ProductAvailabilityWhereInput
    some?: ProductAvailabilityWhereInput
    none?: ProductAvailabilityWhereInput
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceBaseCurrency?: SortOrder
    priceBaseDiscount?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    discountPercentage?: SortOrder
    freeShipping?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itsNew?: SortOrder
    brand?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    priceBaseCurrency?: SortOrder
    priceBaseDiscount?: SortOrder
    stock?: SortOrder
    discountPercentage?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceBaseCurrency?: SortOrder
    priceBaseDiscount?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    discountPercentage?: SortOrder
    freeShipping?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itsNew?: SortOrder
    brand?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    priceBaseCurrency?: SortOrder
    priceBaseDiscount?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    discountPercentage?: SortOrder
    freeShipping?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itsNew?: SortOrder
    brand?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    priceBaseCurrency?: SortOrder
    priceBaseDiscount?: SortOrder
    stock?: SortOrder
    discountPercentage?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    cover?: SortOrder
    image?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    cover?: SortOrder
    image?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    cover?: SortOrder
    image?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CurrencyScalarRelationFilter = {
    is?: CurrencyWhereInput
    isNot?: CurrencyWhereInput
  }

  export type PriceProductIdCurrencyIdCompoundUniqueInput = {
    productId: number
    currencyId: number
  }

  export type PriceCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    isFixed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    isFixed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
    isFixed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    currencyId?: SortOrder
    value?: SortOrder
  }

  export type MunicipalityListRelationFilter = {
    every?: MunicipalityWhereInput
    some?: MunicipalityWhereInput
    none?: MunicipalityWhereInput
  }

  export type MunicipalityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceScalarRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type TownListRelationFilter = {
    every?: TownWhereInput
    some?: TownWhereInput
    none?: TownWhereInput
  }

  export type TownOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipalityNameProvinceIdCompoundUniqueInput = {
    name: string
    provinceId: number
  }

  export type MunicipalityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type MunicipalityAvgOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type MunicipalityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type MunicipalityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type MunicipalitySumOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type MunicipalityScalarRelationFilter = {
    is?: MunicipalityWhereInput
    isNot?: MunicipalityWhereInput
  }

  export type TownNameMunicipalityIdCompoundUniqueInput = {
    name: string
    municipalityId: number
  }

  export type TownCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    municipalityId?: SortOrder
  }

  export type TownAvgOrderByAggregateInput = {
    id?: SortOrder
    municipalityId?: SortOrder
  }

  export type TownMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    municipalityId?: SortOrder
  }

  export type TownMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    municipalityId?: SortOrder
  }

  export type TownSumOrderByAggregateInput = {
    id?: SortOrder
    municipalityId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProvinceNullableScalarRelationFilter = {
    is?: ProvinceWhereInput | null
    isNot?: ProvinceWhereInput | null
  }

  export type MunicipalityNullableScalarRelationFilter = {
    is?: MunicipalityWhereInput | null
    isNot?: MunicipalityWhereInput | null
  }

  export type TownNullableScalarRelationFilter = {
    is?: TownWhereInput | null
    isNot?: TownWhereInput | null
  }

  export type ProductAvailabilityProductIdProvinceIdMunicipalityIdTownIdCompoundUniqueInput = {
    productId: number
    provinceId: number
    municipalityId: number
    townId: number
  }

  export type ProductAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    provinceId?: SortOrder
    municipalityId?: SortOrder
    townId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    provinceId?: SortOrder
    municipalityId?: SortOrder
    townId?: SortOrder
  }

  export type ProductAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    provinceId?: SortOrder
    municipalityId?: SortOrder
    townId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    provinceId?: SortOrder
    municipalityId?: SortOrder
    townId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    provinceId?: SortOrder
    municipalityId?: SortOrder
    townId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PriceCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PriceUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutCurrencyInput | PriceUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutCurrencyInput | PriceUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutCurrencyInput | PriceUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PriceUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutCurrencyInput | PriceUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutCurrencyInput | PriceUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutCurrencyInput | PriceUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutProductInput = {
    create?: XOR<CompanyCreateWithoutProductInput, CompanyUncheckedCreateWithoutProductInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductInput
    connect?: CompanyWhereUniqueInput
  }

  export type PriceCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type ProductAvailabilityCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProductInput, ProductAvailabilityUncheckedCreateWithoutProductInput> | ProductAvailabilityCreateWithoutProductInput[] | ProductAvailabilityUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProductInput | ProductAvailabilityCreateOrConnectWithoutProductInput[]
    createMany?: ProductAvailabilityCreateManyProductInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type ProductAvailabilityUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProductInput, ProductAvailabilityUncheckedCreateWithoutProductInput> | ProductAvailabilityCreateWithoutProductInput[] | ProductAvailabilityUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProductInput | ProductAvailabilityCreateOrConnectWithoutProductInput[]
    createMany?: ProductAvailabilityCreateManyProductInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CompanyUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CompanyCreateWithoutProductInput, CompanyUncheckedCreateWithoutProductInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductInput
    upsert?: CompanyUpsertWithoutProductInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProductInput, CompanyUpdateWithoutProductInput>, CompanyUncheckedUpdateWithoutProductInput>
  }

  export type PriceUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductInput | PriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductInput | PriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductInput | PriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ProductAvailabilityUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProductInput, ProductAvailabilityUncheckedCreateWithoutProductInput> | ProductAvailabilityCreateWithoutProductInput[] | ProductAvailabilityUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProductInput | ProductAvailabilityCreateOrConnectWithoutProductInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutProductInput | ProductAvailabilityUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAvailabilityCreateManyProductInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutProductInput | ProductAvailabilityUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutProductInput | ProductAvailabilityUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductInput | PriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductInput | PriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductInput | PriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProductInput, ProductAvailabilityUncheckedCreateWithoutProductInput> | ProductAvailabilityCreateWithoutProductInput[] | ProductAvailabilityUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProductInput | ProductAvailabilityCreateOrConnectWithoutProductInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutProductInput | ProductAvailabilityUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAvailabilityCreateManyProductInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutProductInput | ProductAvailabilityUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutProductInput | ProductAvailabilityUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductImageInput = {
    create?: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImageInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductImageNestedInput = {
    create?: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImageInput
    upsert?: ProductUpsertWithoutProductImageInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductImageInput, ProductUpdateWithoutProductImageInput>, ProductUncheckedUpdateWithoutProductImageInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPriceInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput
    connect?: ProductWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutPriceInput = {
    create?: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutPriceInput
    connect?: CurrencyWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput
    upsert?: ProductUpsertWithoutPriceInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPriceInput, ProductUpdateWithoutPriceInput>, ProductUncheckedUpdateWithoutPriceInput>
  }

  export type CurrencyUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutPriceInput
    upsert?: CurrencyUpsertWithoutPriceInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutPriceInput, CurrencyUpdateWithoutPriceInput>, CurrencyUncheckedUpdateWithoutPriceInput>
  }

  export type MunicipalityCreateNestedManyWithoutProvinceInput = {
    create?: XOR<MunicipalityCreateWithoutProvinceInput, MunicipalityUncheckedCreateWithoutProvinceInput> | MunicipalityCreateWithoutProvinceInput[] | MunicipalityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: MunicipalityCreateOrConnectWithoutProvinceInput | MunicipalityCreateOrConnectWithoutProvinceInput[]
    createMany?: MunicipalityCreateManyProvinceInputEnvelope
    connect?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
  }

  export type ProductAvailabilityCreateNestedManyWithoutProvinceInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProvinceInput, ProductAvailabilityUncheckedCreateWithoutProvinceInput> | ProductAvailabilityCreateWithoutProvinceInput[] | ProductAvailabilityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProvinceInput | ProductAvailabilityCreateOrConnectWithoutProvinceInput[]
    createMany?: ProductAvailabilityCreateManyProvinceInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type MunicipalityUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<MunicipalityCreateWithoutProvinceInput, MunicipalityUncheckedCreateWithoutProvinceInput> | MunicipalityCreateWithoutProvinceInput[] | MunicipalityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: MunicipalityCreateOrConnectWithoutProvinceInput | MunicipalityCreateOrConnectWithoutProvinceInput[]
    createMany?: MunicipalityCreateManyProvinceInputEnvelope
    connect?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
  }

  export type ProductAvailabilityUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProvinceInput, ProductAvailabilityUncheckedCreateWithoutProvinceInput> | ProductAvailabilityCreateWithoutProvinceInput[] | ProductAvailabilityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProvinceInput | ProductAvailabilityCreateOrConnectWithoutProvinceInput[]
    createMany?: ProductAvailabilityCreateManyProvinceInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type MunicipalityUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<MunicipalityCreateWithoutProvinceInput, MunicipalityUncheckedCreateWithoutProvinceInput> | MunicipalityCreateWithoutProvinceInput[] | MunicipalityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: MunicipalityCreateOrConnectWithoutProvinceInput | MunicipalityCreateOrConnectWithoutProvinceInput[]
    upsert?: MunicipalityUpsertWithWhereUniqueWithoutProvinceInput | MunicipalityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: MunicipalityCreateManyProvinceInputEnvelope
    set?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    disconnect?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    delete?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    connect?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    update?: MunicipalityUpdateWithWhereUniqueWithoutProvinceInput | MunicipalityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: MunicipalityUpdateManyWithWhereWithoutProvinceInput | MunicipalityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: MunicipalityScalarWhereInput | MunicipalityScalarWhereInput[]
  }

  export type ProductAvailabilityUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProvinceInput, ProductAvailabilityUncheckedCreateWithoutProvinceInput> | ProductAvailabilityCreateWithoutProvinceInput[] | ProductAvailabilityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProvinceInput | ProductAvailabilityCreateOrConnectWithoutProvinceInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutProvinceInput | ProductAvailabilityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: ProductAvailabilityCreateManyProvinceInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutProvinceInput | ProductAvailabilityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutProvinceInput | ProductAvailabilityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type MunicipalityUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<MunicipalityCreateWithoutProvinceInput, MunicipalityUncheckedCreateWithoutProvinceInput> | MunicipalityCreateWithoutProvinceInput[] | MunicipalityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: MunicipalityCreateOrConnectWithoutProvinceInput | MunicipalityCreateOrConnectWithoutProvinceInput[]
    upsert?: MunicipalityUpsertWithWhereUniqueWithoutProvinceInput | MunicipalityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: MunicipalityCreateManyProvinceInputEnvelope
    set?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    disconnect?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    delete?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    connect?: MunicipalityWhereUniqueInput | MunicipalityWhereUniqueInput[]
    update?: MunicipalityUpdateWithWhereUniqueWithoutProvinceInput | MunicipalityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: MunicipalityUpdateManyWithWhereWithoutProvinceInput | MunicipalityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: MunicipalityScalarWhereInput | MunicipalityScalarWhereInput[]
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutProvinceInput, ProductAvailabilityUncheckedCreateWithoutProvinceInput> | ProductAvailabilityCreateWithoutProvinceInput[] | ProductAvailabilityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutProvinceInput | ProductAvailabilityCreateOrConnectWithoutProvinceInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutProvinceInput | ProductAvailabilityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: ProductAvailabilityCreateManyProvinceInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutProvinceInput | ProductAvailabilityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutProvinceInput | ProductAvailabilityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type ProvinceCreateNestedOneWithoutMunicipalitiesInput = {
    create?: XOR<ProvinceCreateWithoutMunicipalitiesInput, ProvinceUncheckedCreateWithoutMunicipalitiesInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutMunicipalitiesInput
    connect?: ProvinceWhereUniqueInput
  }

  export type TownCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<TownCreateWithoutMunicipalityInput, TownUncheckedCreateWithoutMunicipalityInput> | TownCreateWithoutMunicipalityInput[] | TownUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: TownCreateOrConnectWithoutMunicipalityInput | TownCreateOrConnectWithoutMunicipalityInput[]
    createMany?: TownCreateManyMunicipalityInputEnvelope
    connect?: TownWhereUniqueInput | TownWhereUniqueInput[]
  }

  export type ProductAvailabilityCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<ProductAvailabilityCreateWithoutMunicipalityInput, ProductAvailabilityUncheckedCreateWithoutMunicipalityInput> | ProductAvailabilityCreateWithoutMunicipalityInput[] | ProductAvailabilityUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutMunicipalityInput | ProductAvailabilityCreateOrConnectWithoutMunicipalityInput[]
    createMany?: ProductAvailabilityCreateManyMunicipalityInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type TownUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<TownCreateWithoutMunicipalityInput, TownUncheckedCreateWithoutMunicipalityInput> | TownCreateWithoutMunicipalityInput[] | TownUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: TownCreateOrConnectWithoutMunicipalityInput | TownCreateOrConnectWithoutMunicipalityInput[]
    createMany?: TownCreateManyMunicipalityInputEnvelope
    connect?: TownWhereUniqueInput | TownWhereUniqueInput[]
  }

  export type ProductAvailabilityUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<ProductAvailabilityCreateWithoutMunicipalityInput, ProductAvailabilityUncheckedCreateWithoutMunicipalityInput> | ProductAvailabilityCreateWithoutMunicipalityInput[] | ProductAvailabilityUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutMunicipalityInput | ProductAvailabilityCreateOrConnectWithoutMunicipalityInput[]
    createMany?: ProductAvailabilityCreateManyMunicipalityInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type ProvinceUpdateOneRequiredWithoutMunicipalitiesNestedInput = {
    create?: XOR<ProvinceCreateWithoutMunicipalitiesInput, ProvinceUncheckedCreateWithoutMunicipalitiesInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutMunicipalitiesInput
    upsert?: ProvinceUpsertWithoutMunicipalitiesInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutMunicipalitiesInput, ProvinceUpdateWithoutMunicipalitiesInput>, ProvinceUncheckedUpdateWithoutMunicipalitiesInput>
  }

  export type TownUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<TownCreateWithoutMunicipalityInput, TownUncheckedCreateWithoutMunicipalityInput> | TownCreateWithoutMunicipalityInput[] | TownUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: TownCreateOrConnectWithoutMunicipalityInput | TownCreateOrConnectWithoutMunicipalityInput[]
    upsert?: TownUpsertWithWhereUniqueWithoutMunicipalityInput | TownUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: TownCreateManyMunicipalityInputEnvelope
    set?: TownWhereUniqueInput | TownWhereUniqueInput[]
    disconnect?: TownWhereUniqueInput | TownWhereUniqueInput[]
    delete?: TownWhereUniqueInput | TownWhereUniqueInput[]
    connect?: TownWhereUniqueInput | TownWhereUniqueInput[]
    update?: TownUpdateWithWhereUniqueWithoutMunicipalityInput | TownUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: TownUpdateManyWithWhereWithoutMunicipalityInput | TownUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: TownScalarWhereInput | TownScalarWhereInput[]
  }

  export type ProductAvailabilityUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutMunicipalityInput, ProductAvailabilityUncheckedCreateWithoutMunicipalityInput> | ProductAvailabilityCreateWithoutMunicipalityInput[] | ProductAvailabilityUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutMunicipalityInput | ProductAvailabilityCreateOrConnectWithoutMunicipalityInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutMunicipalityInput | ProductAvailabilityUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: ProductAvailabilityCreateManyMunicipalityInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutMunicipalityInput | ProductAvailabilityUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutMunicipalityInput | ProductAvailabilityUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type TownUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<TownCreateWithoutMunicipalityInput, TownUncheckedCreateWithoutMunicipalityInput> | TownCreateWithoutMunicipalityInput[] | TownUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: TownCreateOrConnectWithoutMunicipalityInput | TownCreateOrConnectWithoutMunicipalityInput[]
    upsert?: TownUpsertWithWhereUniqueWithoutMunicipalityInput | TownUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: TownCreateManyMunicipalityInputEnvelope
    set?: TownWhereUniqueInput | TownWhereUniqueInput[]
    disconnect?: TownWhereUniqueInput | TownWhereUniqueInput[]
    delete?: TownWhereUniqueInput | TownWhereUniqueInput[]
    connect?: TownWhereUniqueInput | TownWhereUniqueInput[]
    update?: TownUpdateWithWhereUniqueWithoutMunicipalityInput | TownUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: TownUpdateManyWithWhereWithoutMunicipalityInput | TownUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: TownScalarWhereInput | TownScalarWhereInput[]
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutMunicipalityInput, ProductAvailabilityUncheckedCreateWithoutMunicipalityInput> | ProductAvailabilityCreateWithoutMunicipalityInput[] | ProductAvailabilityUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutMunicipalityInput | ProductAvailabilityCreateOrConnectWithoutMunicipalityInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutMunicipalityInput | ProductAvailabilityUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: ProductAvailabilityCreateManyMunicipalityInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutMunicipalityInput | ProductAvailabilityUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutMunicipalityInput | ProductAvailabilityUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type MunicipalityCreateNestedOneWithoutTownsInput = {
    create?: XOR<MunicipalityCreateWithoutTownsInput, MunicipalityUncheckedCreateWithoutTownsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutTownsInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type ProductAvailabilityCreateNestedManyWithoutTownInput = {
    create?: XOR<ProductAvailabilityCreateWithoutTownInput, ProductAvailabilityUncheckedCreateWithoutTownInput> | ProductAvailabilityCreateWithoutTownInput[] | ProductAvailabilityUncheckedCreateWithoutTownInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutTownInput | ProductAvailabilityCreateOrConnectWithoutTownInput[]
    createMany?: ProductAvailabilityCreateManyTownInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type ProductAvailabilityUncheckedCreateNestedManyWithoutTownInput = {
    create?: XOR<ProductAvailabilityCreateWithoutTownInput, ProductAvailabilityUncheckedCreateWithoutTownInput> | ProductAvailabilityCreateWithoutTownInput[] | ProductAvailabilityUncheckedCreateWithoutTownInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutTownInput | ProductAvailabilityCreateOrConnectWithoutTownInput[]
    createMany?: ProductAvailabilityCreateManyTownInputEnvelope
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
  }

  export type MunicipalityUpdateOneRequiredWithoutTownsNestedInput = {
    create?: XOR<MunicipalityCreateWithoutTownsInput, MunicipalityUncheckedCreateWithoutTownsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutTownsInput
    upsert?: MunicipalityUpsertWithoutTownsInput
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutTownsInput, MunicipalityUpdateWithoutTownsInput>, MunicipalityUncheckedUpdateWithoutTownsInput>
  }

  export type ProductAvailabilityUpdateManyWithoutTownNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutTownInput, ProductAvailabilityUncheckedCreateWithoutTownInput> | ProductAvailabilityCreateWithoutTownInput[] | ProductAvailabilityUncheckedCreateWithoutTownInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutTownInput | ProductAvailabilityCreateOrConnectWithoutTownInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutTownInput | ProductAvailabilityUpsertWithWhereUniqueWithoutTownInput[]
    createMany?: ProductAvailabilityCreateManyTownInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutTownInput | ProductAvailabilityUpdateWithWhereUniqueWithoutTownInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutTownInput | ProductAvailabilityUpdateManyWithWhereWithoutTownInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutTownNestedInput = {
    create?: XOR<ProductAvailabilityCreateWithoutTownInput, ProductAvailabilityUncheckedCreateWithoutTownInput> | ProductAvailabilityCreateWithoutTownInput[] | ProductAvailabilityUncheckedCreateWithoutTownInput[]
    connectOrCreate?: ProductAvailabilityCreateOrConnectWithoutTownInput | ProductAvailabilityCreateOrConnectWithoutTownInput[]
    upsert?: ProductAvailabilityUpsertWithWhereUniqueWithoutTownInput | ProductAvailabilityUpsertWithWhereUniqueWithoutTownInput[]
    createMany?: ProductAvailabilityCreateManyTownInputEnvelope
    set?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    disconnect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    delete?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    connect?: ProductAvailabilityWhereUniqueInput | ProductAvailabilityWhereUniqueInput[]
    update?: ProductAvailabilityUpdateWithWhereUniqueWithoutTownInput | ProductAvailabilityUpdateWithWhereUniqueWithoutTownInput[]
    updateMany?: ProductAvailabilityUpdateManyWithWhereWithoutTownInput | ProductAvailabilityUpdateManyWithWhereWithoutTownInput[]
    deleteMany?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutAvailableLocationsInput = {
    create?: XOR<ProductCreateWithoutAvailableLocationsInput, ProductUncheckedCreateWithoutAvailableLocationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAvailableLocationsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProvinceCreateNestedOneWithoutAvailableProductsInput = {
    create?: XOR<ProvinceCreateWithoutAvailableProductsInput, ProvinceUncheckedCreateWithoutAvailableProductsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutAvailableProductsInput
    connect?: ProvinceWhereUniqueInput
  }

  export type MunicipalityCreateNestedOneWithoutAvailableProductsInput = {
    create?: XOR<MunicipalityCreateWithoutAvailableProductsInput, MunicipalityUncheckedCreateWithoutAvailableProductsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutAvailableProductsInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type TownCreateNestedOneWithoutAvailableProductsInput = {
    create?: XOR<TownCreateWithoutAvailableProductsInput, TownUncheckedCreateWithoutAvailableProductsInput>
    connectOrCreate?: TownCreateOrConnectWithoutAvailableProductsInput
    connect?: TownWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutAvailableLocationsNestedInput = {
    create?: XOR<ProductCreateWithoutAvailableLocationsInput, ProductUncheckedCreateWithoutAvailableLocationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAvailableLocationsInput
    upsert?: ProductUpsertWithoutAvailableLocationsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAvailableLocationsInput, ProductUpdateWithoutAvailableLocationsInput>, ProductUncheckedUpdateWithoutAvailableLocationsInput>
  }

  export type ProvinceUpdateOneWithoutAvailableProductsNestedInput = {
    create?: XOR<ProvinceCreateWithoutAvailableProductsInput, ProvinceUncheckedCreateWithoutAvailableProductsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutAvailableProductsInput
    upsert?: ProvinceUpsertWithoutAvailableProductsInput
    disconnect?: ProvinceWhereInput | boolean
    delete?: ProvinceWhereInput | boolean
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutAvailableProductsInput, ProvinceUpdateWithoutAvailableProductsInput>, ProvinceUncheckedUpdateWithoutAvailableProductsInput>
  }

  export type MunicipalityUpdateOneWithoutAvailableProductsNestedInput = {
    create?: XOR<MunicipalityCreateWithoutAvailableProductsInput, MunicipalityUncheckedCreateWithoutAvailableProductsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutAvailableProductsInput
    upsert?: MunicipalityUpsertWithoutAvailableProductsInput
    disconnect?: MunicipalityWhereInput | boolean
    delete?: MunicipalityWhereInput | boolean
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutAvailableProductsInput, MunicipalityUpdateWithoutAvailableProductsInput>, MunicipalityUncheckedUpdateWithoutAvailableProductsInput>
  }

  export type TownUpdateOneWithoutAvailableProductsNestedInput = {
    create?: XOR<TownCreateWithoutAvailableProductsInput, TownUncheckedCreateWithoutAvailableProductsInput>
    connectOrCreate?: TownCreateOrConnectWithoutAvailableProductsInput
    upsert?: TownUpsertWithoutAvailableProductsInput
    disconnect?: TownWhereInput | boolean
    delete?: TownWhereInput | boolean
    connect?: TownWhereUniqueInput
    update?: XOR<XOR<TownUpdateToOneWithWhereWithoutAvailableProductsInput, TownUpdateWithoutAvailableProductsInput>, TownUncheckedUpdateWithoutAvailableProductsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PriceCreateWithoutCurrencyInput = {
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateWithoutCurrencyInput = {
    id?: number
    productId: number
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceCreateOrConnectWithoutCurrencyInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput>
  }

  export type PriceCreateManyCurrencyInputEnvelope = {
    data: PriceCreateManyCurrencyInput | PriceCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type PriceUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutCurrencyInput, PriceUncheckedUpdateWithoutCurrencyInput>
    create: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutCurrencyInput, PriceUncheckedUpdateWithoutCurrencyInput>
  }

  export type PriceUpdateManyWithWhereWithoutCurrencyInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    id?: IntFilter<"Price"> | number
    productId?: IntFilter<"Price"> | number
    currencyId?: IntFilter<"Price"> | number
    value?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFilter<"Price"> | boolean
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
  }

  export type ProductCreateWithoutCompanyInput = {
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    Price?: PriceCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    Price?: PriceUncheckedCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityUncheckedCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductCreateManyCompanyInputEnvelope = {
    data: ProductCreateManyCompanyInput | ProductCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
  }

  export type ProductUpdateManyWithWhereWithoutCompanyInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    priceBaseCurrency?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: FloatNullableFilter<"Product"> | number | null
    stock?: IntFilter<"Product"> | number
    image?: StringFilter<"Product"> | string
    discountPercentage?: FloatNullableFilter<"Product"> | number | null
    freeShipping?: BoolFilter<"Product"> | boolean
    categoryId?: IntFilter<"Product"> | number
    companyId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    itsNew?: BoolFilter<"Product"> | boolean
    brand?: StringNullableFilter<"Product"> | string | null
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CompanyCreateWithoutProductInput = {
    name: string
  }

  export type CompanyUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
  }

  export type CompanyCreateOrConnectWithoutProductInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProductInput, CompanyUncheckedCreateWithoutProductInput>
  }

  export type PriceCreateWithoutProductInput = {
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currency: CurrencyCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateWithoutProductInput = {
    id?: number
    currencyId: number
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceCreateOrConnectWithoutProductInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
  }

  export type PriceCreateManyProductInputEnvelope = {
    data: PriceCreateManyProductInput | PriceCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductAvailabilityCreateWithoutProductInput = {
    createdAt?: Date | string
    province?: ProvinceCreateNestedOneWithoutAvailableProductsInput
    municipality?: MunicipalityCreateNestedOneWithoutAvailableProductsInput
    town?: TownCreateNestedOneWithoutAvailableProductsInput
  }

  export type ProductAvailabilityUncheckedCreateWithoutProductInput = {
    id?: number
    provinceId?: number | null
    municipalityId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type ProductAvailabilityCreateOrConnectWithoutProductInput = {
    where: ProductAvailabilityWhereUniqueInput
    create: XOR<ProductAvailabilityCreateWithoutProductInput, ProductAvailabilityUncheckedCreateWithoutProductInput>
  }

  export type ProductAvailabilityCreateManyProductInputEnvelope = {
    data: ProductAvailabilityCreateManyProductInput | ProductAvailabilityCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductImageCreateWithoutProductInput = {
    cover?: boolean
    image: string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: number
    cover?: boolean
    image: string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUpsertWithoutProductInput = {
    update: XOR<CompanyUpdateWithoutProductInput, CompanyUncheckedUpdateWithoutProductInput>
    create: XOR<CompanyCreateWithoutProductInput, CompanyUncheckedCreateWithoutProductInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProductInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProductInput, CompanyUncheckedUpdateWithoutProductInput>
  }

  export type CompanyUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUpsertWithWhereUniqueWithoutProductInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutProductInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
  }

  export type PriceUpdateManyWithWhereWithoutProductInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductAvailabilityUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductAvailabilityWhereUniqueInput
    update: XOR<ProductAvailabilityUpdateWithoutProductInput, ProductAvailabilityUncheckedUpdateWithoutProductInput>
    create: XOR<ProductAvailabilityCreateWithoutProductInput, ProductAvailabilityUncheckedCreateWithoutProductInput>
  }

  export type ProductAvailabilityUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductAvailabilityWhereUniqueInput
    data: XOR<ProductAvailabilityUpdateWithoutProductInput, ProductAvailabilityUncheckedUpdateWithoutProductInput>
  }

  export type ProductAvailabilityUpdateManyWithWhereWithoutProductInput = {
    where: ProductAvailabilityScalarWhereInput
    data: XOR<ProductAvailabilityUpdateManyMutationInput, ProductAvailabilityUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductAvailabilityScalarWhereInput = {
    AND?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
    OR?: ProductAvailabilityScalarWhereInput[]
    NOT?: ProductAvailabilityScalarWhereInput | ProductAvailabilityScalarWhereInput[]
    id?: IntFilter<"ProductAvailability"> | number
    productId?: IntFilter<"ProductAvailability"> | number
    provinceId?: IntNullableFilter<"ProductAvailability"> | number | null
    municipalityId?: IntNullableFilter<"ProductAvailability"> | number | null
    townId?: IntNullableFilter<"ProductAvailability"> | number | null
    createdAt?: DateTimeFilter<"ProductAvailability"> | Date | string
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    cover?: BoolFilter<"ProductImage"> | boolean
    image?: StringFilter<"ProductImage"> | string
  }

  export type ProductCreateWithoutProductImageInput = {
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductInput
    Price?: PriceCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductImageInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    categoryId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    Price?: PriceUncheckedCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductImageInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
  }

  export type ProductUpsertWithoutProductImageInput = {
    update: XOR<ProductUpdateWithoutProductImageInput, ProductUncheckedUpdateWithoutProductImageInput>
    create: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductImageInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductImageInput, ProductUncheckedUpdateWithoutProductImageInput>
  }

  export type ProductUpdateWithoutProductImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput
    Price?: PriceUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: PriceUncheckedUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    company: CompanyCreateNestedOneWithoutProductInput
    Price?: PriceCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    Price?: PriceUncheckedCreateNestedManyWithoutProductInput
    availableLocations?: ProductAvailabilityUncheckedCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutPriceInput = {
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductInput
    availableLocations?: ProductAvailabilityCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPriceInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    categoryId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    availableLocations?: ProductAvailabilityUncheckedCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPriceInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
  }

  export type CurrencyCreateWithoutPriceInput = {
    name: string
    baseRate: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isBase?: boolean
    symbol: string
  }

  export type CurrencyUncheckedCreateWithoutPriceInput = {
    id?: number
    name: string
    baseRate: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isBase?: boolean
    symbol: string
  }

  export type CurrencyCreateOrConnectWithoutPriceInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
  }

  export type ProductUpsertWithoutPriceInput = {
    update: XOR<ProductUpdateWithoutPriceInput, ProductUncheckedUpdateWithoutPriceInput>
    create: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPriceInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPriceInput, ProductUncheckedUpdateWithoutPriceInput>
  }

  export type ProductUpdateWithoutPriceInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    availableLocations?: ProductAvailabilityUncheckedUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CurrencyUpsertWithoutPriceInput = {
    update: XOR<CurrencyUpdateWithoutPriceInput, CurrencyUncheckedUpdateWithoutPriceInput>
    create: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutPriceInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutPriceInput, CurrencyUncheckedUpdateWithoutPriceInput>
  }

  export type CurrencyUpdateWithoutPriceInput = {
    name?: StringFieldUpdateOperationsInput | string
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isBase?: BoolFieldUpdateOperationsInput | boolean
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateWithoutPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isBase?: BoolFieldUpdateOperationsInput | boolean
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityCreateWithoutProvinceInput = {
    name: string
    towns?: TownCreateNestedManyWithoutMunicipalityInput
    availableProducts?: ProductAvailabilityCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutProvinceInput = {
    id?: number
    name: string
    towns?: TownUncheckedCreateNestedManyWithoutMunicipalityInput
    availableProducts?: ProductAvailabilityUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutProvinceInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutProvinceInput, MunicipalityUncheckedCreateWithoutProvinceInput>
  }

  export type MunicipalityCreateManyProvinceInputEnvelope = {
    data: MunicipalityCreateManyProvinceInput | MunicipalityCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type ProductAvailabilityCreateWithoutProvinceInput = {
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAvailableLocationsInput
    municipality?: MunicipalityCreateNestedOneWithoutAvailableProductsInput
    town?: TownCreateNestedOneWithoutAvailableProductsInput
  }

  export type ProductAvailabilityUncheckedCreateWithoutProvinceInput = {
    id?: number
    productId: number
    municipalityId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type ProductAvailabilityCreateOrConnectWithoutProvinceInput = {
    where: ProductAvailabilityWhereUniqueInput
    create: XOR<ProductAvailabilityCreateWithoutProvinceInput, ProductAvailabilityUncheckedCreateWithoutProvinceInput>
  }

  export type ProductAvailabilityCreateManyProvinceInputEnvelope = {
    data: ProductAvailabilityCreateManyProvinceInput | ProductAvailabilityCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type MunicipalityUpsertWithWhereUniqueWithoutProvinceInput = {
    where: MunicipalityWhereUniqueInput
    update: XOR<MunicipalityUpdateWithoutProvinceInput, MunicipalityUncheckedUpdateWithoutProvinceInput>
    create: XOR<MunicipalityCreateWithoutProvinceInput, MunicipalityUncheckedCreateWithoutProvinceInput>
  }

  export type MunicipalityUpdateWithWhereUniqueWithoutProvinceInput = {
    where: MunicipalityWhereUniqueInput
    data: XOR<MunicipalityUpdateWithoutProvinceInput, MunicipalityUncheckedUpdateWithoutProvinceInput>
  }

  export type MunicipalityUpdateManyWithWhereWithoutProvinceInput = {
    where: MunicipalityScalarWhereInput
    data: XOR<MunicipalityUpdateManyMutationInput, MunicipalityUncheckedUpdateManyWithoutProvinceInput>
  }

  export type MunicipalityScalarWhereInput = {
    AND?: MunicipalityScalarWhereInput | MunicipalityScalarWhereInput[]
    OR?: MunicipalityScalarWhereInput[]
    NOT?: MunicipalityScalarWhereInput | MunicipalityScalarWhereInput[]
    id?: IntFilter<"Municipality"> | number
    name?: StringFilter<"Municipality"> | string
    provinceId?: IntFilter<"Municipality"> | number
  }

  export type ProductAvailabilityUpsertWithWhereUniqueWithoutProvinceInput = {
    where: ProductAvailabilityWhereUniqueInput
    update: XOR<ProductAvailabilityUpdateWithoutProvinceInput, ProductAvailabilityUncheckedUpdateWithoutProvinceInput>
    create: XOR<ProductAvailabilityCreateWithoutProvinceInput, ProductAvailabilityUncheckedCreateWithoutProvinceInput>
  }

  export type ProductAvailabilityUpdateWithWhereUniqueWithoutProvinceInput = {
    where: ProductAvailabilityWhereUniqueInput
    data: XOR<ProductAvailabilityUpdateWithoutProvinceInput, ProductAvailabilityUncheckedUpdateWithoutProvinceInput>
  }

  export type ProductAvailabilityUpdateManyWithWhereWithoutProvinceInput = {
    where: ProductAvailabilityScalarWhereInput
    data: XOR<ProductAvailabilityUpdateManyMutationInput, ProductAvailabilityUncheckedUpdateManyWithoutProvinceInput>
  }

  export type ProvinceCreateWithoutMunicipalitiesInput = {
    name: string
    availableProducts?: ProductAvailabilityCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutMunicipalitiesInput = {
    id?: number
    name: string
    availableProducts?: ProductAvailabilityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutMunicipalitiesInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutMunicipalitiesInput, ProvinceUncheckedCreateWithoutMunicipalitiesInput>
  }

  export type TownCreateWithoutMunicipalityInput = {
    name: string
    availableProducts?: ProductAvailabilityCreateNestedManyWithoutTownInput
  }

  export type TownUncheckedCreateWithoutMunicipalityInput = {
    id?: number
    name: string
    availableProducts?: ProductAvailabilityUncheckedCreateNestedManyWithoutTownInput
  }

  export type TownCreateOrConnectWithoutMunicipalityInput = {
    where: TownWhereUniqueInput
    create: XOR<TownCreateWithoutMunicipalityInput, TownUncheckedCreateWithoutMunicipalityInput>
  }

  export type TownCreateManyMunicipalityInputEnvelope = {
    data: TownCreateManyMunicipalityInput | TownCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type ProductAvailabilityCreateWithoutMunicipalityInput = {
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAvailableLocationsInput
    province?: ProvinceCreateNestedOneWithoutAvailableProductsInput
    town?: TownCreateNestedOneWithoutAvailableProductsInput
  }

  export type ProductAvailabilityUncheckedCreateWithoutMunicipalityInput = {
    id?: number
    productId: number
    provinceId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type ProductAvailabilityCreateOrConnectWithoutMunicipalityInput = {
    where: ProductAvailabilityWhereUniqueInput
    create: XOR<ProductAvailabilityCreateWithoutMunicipalityInput, ProductAvailabilityUncheckedCreateWithoutMunicipalityInput>
  }

  export type ProductAvailabilityCreateManyMunicipalityInputEnvelope = {
    data: ProductAvailabilityCreateManyMunicipalityInput | ProductAvailabilityCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithoutMunicipalitiesInput = {
    update: XOR<ProvinceUpdateWithoutMunicipalitiesInput, ProvinceUncheckedUpdateWithoutMunicipalitiesInput>
    create: XOR<ProvinceCreateWithoutMunicipalitiesInput, ProvinceUncheckedCreateWithoutMunicipalitiesInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutMunicipalitiesInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutMunicipalitiesInput, ProvinceUncheckedUpdateWithoutMunicipalitiesInput>
  }

  export type ProvinceUpdateWithoutMunicipalitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    availableProducts?: ProductAvailabilityUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutMunicipalitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availableProducts?: ProductAvailabilityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type TownUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: TownWhereUniqueInput
    update: XOR<TownUpdateWithoutMunicipalityInput, TownUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<TownCreateWithoutMunicipalityInput, TownUncheckedCreateWithoutMunicipalityInput>
  }

  export type TownUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: TownWhereUniqueInput
    data: XOR<TownUpdateWithoutMunicipalityInput, TownUncheckedUpdateWithoutMunicipalityInput>
  }

  export type TownUpdateManyWithWhereWithoutMunicipalityInput = {
    where: TownScalarWhereInput
    data: XOR<TownUpdateManyMutationInput, TownUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type TownScalarWhereInput = {
    AND?: TownScalarWhereInput | TownScalarWhereInput[]
    OR?: TownScalarWhereInput[]
    NOT?: TownScalarWhereInput | TownScalarWhereInput[]
    id?: IntFilter<"Town"> | number
    name?: StringFilter<"Town"> | string
    municipalityId?: IntFilter<"Town"> | number
  }

  export type ProductAvailabilityUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: ProductAvailabilityWhereUniqueInput
    update: XOR<ProductAvailabilityUpdateWithoutMunicipalityInput, ProductAvailabilityUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<ProductAvailabilityCreateWithoutMunicipalityInput, ProductAvailabilityUncheckedCreateWithoutMunicipalityInput>
  }

  export type ProductAvailabilityUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: ProductAvailabilityWhereUniqueInput
    data: XOR<ProductAvailabilityUpdateWithoutMunicipalityInput, ProductAvailabilityUncheckedUpdateWithoutMunicipalityInput>
  }

  export type ProductAvailabilityUpdateManyWithWhereWithoutMunicipalityInput = {
    where: ProductAvailabilityScalarWhereInput
    data: XOR<ProductAvailabilityUpdateManyMutationInput, ProductAvailabilityUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type MunicipalityCreateWithoutTownsInput = {
    name: string
    province: ProvinceCreateNestedOneWithoutMunicipalitiesInput
    availableProducts?: ProductAvailabilityCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutTownsInput = {
    id?: number
    name: string
    provinceId: number
    availableProducts?: ProductAvailabilityUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutTownsInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutTownsInput, MunicipalityUncheckedCreateWithoutTownsInput>
  }

  export type ProductAvailabilityCreateWithoutTownInput = {
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAvailableLocationsInput
    province?: ProvinceCreateNestedOneWithoutAvailableProductsInput
    municipality?: MunicipalityCreateNestedOneWithoutAvailableProductsInput
  }

  export type ProductAvailabilityUncheckedCreateWithoutTownInput = {
    id?: number
    productId: number
    provinceId?: number | null
    municipalityId?: number | null
    createdAt?: Date | string
  }

  export type ProductAvailabilityCreateOrConnectWithoutTownInput = {
    where: ProductAvailabilityWhereUniqueInput
    create: XOR<ProductAvailabilityCreateWithoutTownInput, ProductAvailabilityUncheckedCreateWithoutTownInput>
  }

  export type ProductAvailabilityCreateManyTownInputEnvelope = {
    data: ProductAvailabilityCreateManyTownInput | ProductAvailabilityCreateManyTownInput[]
    skipDuplicates?: boolean
  }

  export type MunicipalityUpsertWithoutTownsInput = {
    update: XOR<MunicipalityUpdateWithoutTownsInput, MunicipalityUncheckedUpdateWithoutTownsInput>
    create: XOR<MunicipalityCreateWithoutTownsInput, MunicipalityUncheckedCreateWithoutTownsInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutTownsInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutTownsInput, MunicipalityUncheckedUpdateWithoutTownsInput>
  }

  export type MunicipalityUpdateWithoutTownsInput = {
    name?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutMunicipalitiesNestedInput
    availableProducts?: ProductAvailabilityUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutTownsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    availableProducts?: ProductAvailabilityUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type ProductAvailabilityUpsertWithWhereUniqueWithoutTownInput = {
    where: ProductAvailabilityWhereUniqueInput
    update: XOR<ProductAvailabilityUpdateWithoutTownInput, ProductAvailabilityUncheckedUpdateWithoutTownInput>
    create: XOR<ProductAvailabilityCreateWithoutTownInput, ProductAvailabilityUncheckedCreateWithoutTownInput>
  }

  export type ProductAvailabilityUpdateWithWhereUniqueWithoutTownInput = {
    where: ProductAvailabilityWhereUniqueInput
    data: XOR<ProductAvailabilityUpdateWithoutTownInput, ProductAvailabilityUncheckedUpdateWithoutTownInput>
  }

  export type ProductAvailabilityUpdateManyWithWhereWithoutTownInput = {
    where: ProductAvailabilityScalarWhereInput
    data: XOR<ProductAvailabilityUpdateManyMutationInput, ProductAvailabilityUncheckedUpdateManyWithoutTownInput>
  }

  export type ProductCreateWithoutAvailableLocationsInput = {
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    category: CategoryCreateNestedOneWithoutProductsInput
    company: CompanyCreateNestedOneWithoutProductInput
    Price?: PriceCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAvailableLocationsInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    categoryId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
    Price?: PriceUncheckedCreateNestedManyWithoutProductInput
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAvailableLocationsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAvailableLocationsInput, ProductUncheckedCreateWithoutAvailableLocationsInput>
  }

  export type ProvinceCreateWithoutAvailableProductsInput = {
    name: string
    municipalities?: MunicipalityCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutAvailableProductsInput = {
    id?: number
    name: string
    municipalities?: MunicipalityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutAvailableProductsInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutAvailableProductsInput, ProvinceUncheckedCreateWithoutAvailableProductsInput>
  }

  export type MunicipalityCreateWithoutAvailableProductsInput = {
    name: string
    province: ProvinceCreateNestedOneWithoutMunicipalitiesInput
    towns?: TownCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutAvailableProductsInput = {
    id?: number
    name: string
    provinceId: number
    towns?: TownUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutAvailableProductsInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutAvailableProductsInput, MunicipalityUncheckedCreateWithoutAvailableProductsInput>
  }

  export type TownCreateWithoutAvailableProductsInput = {
    name: string
    municipality: MunicipalityCreateNestedOneWithoutTownsInput
  }

  export type TownUncheckedCreateWithoutAvailableProductsInput = {
    id?: number
    name: string
    municipalityId: number
  }

  export type TownCreateOrConnectWithoutAvailableProductsInput = {
    where: TownWhereUniqueInput
    create: XOR<TownCreateWithoutAvailableProductsInput, TownUncheckedCreateWithoutAvailableProductsInput>
  }

  export type ProductUpsertWithoutAvailableLocationsInput = {
    update: XOR<ProductUpdateWithoutAvailableLocationsInput, ProductUncheckedUpdateWithoutAvailableLocationsInput>
    create: XOR<ProductCreateWithoutAvailableLocationsInput, ProductUncheckedCreateWithoutAvailableLocationsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAvailableLocationsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAvailableLocationsInput, ProductUncheckedUpdateWithoutAvailableLocationsInput>
  }

  export type ProductUpdateWithoutAvailableLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput
    Price?: PriceUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAvailableLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: PriceUncheckedUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProvinceUpsertWithoutAvailableProductsInput = {
    update: XOR<ProvinceUpdateWithoutAvailableProductsInput, ProvinceUncheckedUpdateWithoutAvailableProductsInput>
    create: XOR<ProvinceCreateWithoutAvailableProductsInput, ProvinceUncheckedCreateWithoutAvailableProductsInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutAvailableProductsInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutAvailableProductsInput, ProvinceUncheckedUpdateWithoutAvailableProductsInput>
  }

  export type ProvinceUpdateWithoutAvailableProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    municipalities?: MunicipalityUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutAvailableProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    municipalities?: MunicipalityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type MunicipalityUpsertWithoutAvailableProductsInput = {
    update: XOR<MunicipalityUpdateWithoutAvailableProductsInput, MunicipalityUncheckedUpdateWithoutAvailableProductsInput>
    create: XOR<MunicipalityCreateWithoutAvailableProductsInput, MunicipalityUncheckedCreateWithoutAvailableProductsInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutAvailableProductsInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutAvailableProductsInput, MunicipalityUncheckedUpdateWithoutAvailableProductsInput>
  }

  export type MunicipalityUpdateWithoutAvailableProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutMunicipalitiesNestedInput
    towns?: TownUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutAvailableProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    towns?: TownUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type TownUpsertWithoutAvailableProductsInput = {
    update: XOR<TownUpdateWithoutAvailableProductsInput, TownUncheckedUpdateWithoutAvailableProductsInput>
    create: XOR<TownCreateWithoutAvailableProductsInput, TownUncheckedCreateWithoutAvailableProductsInput>
    where?: TownWhereInput
  }

  export type TownUpdateToOneWithWhereWithoutAvailableProductsInput = {
    where?: TownWhereInput
    data: XOR<TownUpdateWithoutAvailableProductsInput, TownUncheckedUpdateWithoutAvailableProductsInput>
  }

  export type TownUpdateWithoutAvailableProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    municipality?: MunicipalityUpdateOneRequiredWithoutTownsNestedInput
  }

  export type TownUncheckedUpdateWithoutAvailableProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    municipalityId?: IntFieldUpdateOperationsInput | number
  }

  export type PriceCreateManyCurrencyInput = {
    id?: number
    productId: number
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceUpdateWithoutCurrencyInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCompanyInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
  }

  export type ProductUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    Price?: PriceUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: PriceUncheckedUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUncheckedUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceCreateManyProductInput = {
    id?: number
    currencyId: number
    value: Decimal | DecimalJsLike | number | string
    isFixed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductAvailabilityCreateManyProductInput = {
    id?: number
    provinceId?: number | null
    municipalityId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type ProductImageCreateManyProductInput = {
    id?: number
    cover?: boolean
    image: string
  }

  export type PriceUpdateWithoutProductInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: CurrencyUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFixed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneWithoutAvailableProductsNestedInput
    municipality?: MunicipalityUpdateOneWithoutAvailableProductsNestedInput
    town?: TownUpdateOneWithoutAvailableProductsNestedInput
  }

  export type ProductAvailabilityUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    cover?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cover?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cover?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    priceBaseCurrency: Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: number | null
    stock: number
    image: string
    discountPercentage?: number | null
    freeShipping?: boolean
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itsNew?: boolean
    brand?: string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput
    Price?: PriceUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: PriceUncheckedUpdateManyWithoutProductNestedInput
    availableLocations?: ProductAvailabilityUncheckedUpdateManyWithoutProductNestedInput
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priceBaseCurrency?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceBaseDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    freeShipping?: BoolFieldUpdateOperationsInput | boolean
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itsNew?: BoolFieldUpdateOperationsInput | boolean
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MunicipalityCreateManyProvinceInput = {
    id?: number
    name: string
  }

  export type ProductAvailabilityCreateManyProvinceInput = {
    id?: number
    productId: number
    municipalityId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type MunicipalityUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    towns?: TownUpdateManyWithoutMunicipalityNestedInput
    availableProducts?: ProductAvailabilityUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    towns?: TownUncheckedUpdateManyWithoutMunicipalityNestedInput
    availableProducts?: ProductAvailabilityUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductAvailabilityUpdateWithoutProvinceInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAvailableLocationsNestedInput
    municipality?: MunicipalityUpdateOneWithoutAvailableProductsNestedInput
    town?: TownUpdateOneWithoutAvailableProductsNestedInput
  }

  export type ProductAvailabilityUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TownCreateManyMunicipalityInput = {
    id?: number
    name: string
  }

  export type ProductAvailabilityCreateManyMunicipalityInput = {
    id?: number
    productId: number
    provinceId?: number | null
    townId?: number | null
    createdAt?: Date | string
  }

  export type TownUpdateWithoutMunicipalityInput = {
    name?: StringFieldUpdateOperationsInput | string
    availableProducts?: ProductAvailabilityUpdateManyWithoutTownNestedInput
  }

  export type TownUncheckedUpdateWithoutMunicipalityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availableProducts?: ProductAvailabilityUncheckedUpdateManyWithoutTownNestedInput
  }

  export type TownUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductAvailabilityUpdateWithoutMunicipalityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAvailableLocationsNestedInput
    province?: ProvinceUpdateOneWithoutAvailableProductsNestedInput
    town?: TownUpdateOneWithoutAvailableProductsNestedInput
  }

  export type ProductAvailabilityUncheckedUpdateWithoutMunicipalityInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityCreateManyTownInput = {
    id?: number
    productId: number
    provinceId?: number | null
    municipalityId?: number | null
    createdAt?: Date | string
  }

  export type ProductAvailabilityUpdateWithoutTownInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAvailableLocationsNestedInput
    province?: ProvinceUpdateOneWithoutAvailableProductsNestedInput
    municipality?: MunicipalityUpdateOneWithoutAvailableProductsNestedInput
  }

  export type ProductAvailabilityUncheckedUpdateWithoutTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAvailabilityUncheckedUpdateManyWithoutTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    municipalityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}