import { GraphQLResolveInfo } from 'graphql';
import { BusStopModel } from './models';
import { DataSourceContext } from './utils/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BusStop = {
  __typename?: 'BusStop';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  services?: Maybe<Array<Services>>;
  status_code: Scalars['Boolean']['output'];
  status_description: Scalars['String']['output'];
};

export type Buses = {
  __typename?: 'Buses';
  id: Scalars['ID']['output'];
  max_arrival_time: Scalars['Int']['output'];
  meters_distance: Scalars['Int']['output'];
  min_arrival_time: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  busStop: BusStop;
  hello?: Maybe<Scalars['String']['output']>;
};


export type QueryBusStopArgs = {
  id: Scalars['ID']['input'];
};

export type Services = {
  __typename?: 'Services';
  buses?: Maybe<Array<Buses>>;
  id: Scalars['ID']['output'];
  status_description: Scalars['String']['output'];
  valid: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BusStop: ResolverTypeWrapper<BusStop>;
  Buses: ResolverTypeWrapper<Buses>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Services: ResolverTypeWrapper<Services>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  BusStop: BusStop;
  Buses: Buses;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Query: {};
  Services: Services;
  String: Scalars['String']['output'];
};

export type BusStopResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['BusStop'] = ResolversParentTypes['BusStop']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  services?: Resolver<Maybe<Array<ResolversTypes['Services']>>, ParentType, ContextType>;
  status_code?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Buses'] = ResolversParentTypes['Buses']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max_arrival_time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meters_distance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min_arrival_time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  busStop?: Resolver<ResolversTypes['BusStop'], ParentType, ContextType, RequireFields<QueryBusStopArgs, 'id'>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ServicesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Services'] = ResolversParentTypes['Services']> = {
  buses?: Resolver<Maybe<Array<ResolversTypes['Buses']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  BusStop?: BusStopResolvers<ContextType>;
  Buses?: BusesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Services?: ServicesResolvers<ContextType>;
};

