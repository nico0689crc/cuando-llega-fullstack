/* e64e7926f2e216852a2cae53757175b9c4e5f103
 * This file is automatically generated by graphql-let. */

import { GraphQLResolveInfo } from 'graphql';
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

export type DataNextArrivalsResponse = {
  __typename?: 'DataNextArrivalsResponse';
  arrival: Scalars['String']['output'];
  car_identifier: Scalars['String']['output'];
  driver_identifier: Scalars['String']['output'];
  error_message: Scalars['String']['output'];
  flag_description: Scalars['String']['output'];
  flag_sign_description: Scalars['String']['output'];
  is_adapted: Scalars['String']['output'];
  last_gps_date: Scalars['String']['output'];
  latitude: Scalars['String']['output'];
  line_description: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
  position: Scalars['String']['output'];
  schedule_deviation: Scalars['String']['output'];
  short_flag_description: Scalars['String']['output'];
  stop_latitude: Scalars['String']['output'];
  stop_line_code: Scalars['String']['output'];
  stop_longitude: Scalars['String']['output'];
};

export type Line = {
  __typename?: 'Line';
  code: Scalars['ID']['output'];
  companyCode: Scalars['String']['output'];
  description: Scalars['String']['output'];
  entityCode: Scalars['String']['output'];
  stopLines?: Maybe<Array<StopLine>>;
};

export type LineResponse = {
  __typename?: 'LineResponse';
  message?: Maybe<Scalars['String']['output']>;
  result?: Maybe<LineSingleResponse>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type LineSingleResponse = {
  __typename?: 'LineSingleResponse';
  data: Line;
};

export type LineaNextArrivalsResponse = {
  __typename?: 'LineaNextArrivalsResponse';
  code: Scalars['String']['output'];
  lineDescription: Scalars['String']['output'];
};

export type LinesFindAllResponse = {
  __typename?: 'LinesFindAllResponse';
  currentPage: Scalars['Int']['output'];
  data: Array<Line>;
  pageSize: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type LinesResponse = {
  __typename?: 'LinesResponse';
  message?: Maybe<Scalars['String']['output']>;
  result?: Maybe<LinesFindAllResponse>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type NearestStopsResponse = {
  __typename?: 'NearestStopsResponse';
  message?: Maybe<Scalars['String']['output']>;
  result?: Maybe<NearestStopsResultResponse>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type NearestStopsResultResponse = {
  __typename?: 'NearestStopsResultResponse';
  currentPage: Scalars['Int']['output'];
  data: Array<Stop>;
  pageSize: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type NextArrivalsResponse = {
  __typename?: 'NextArrivalsResponse';
  message?: Maybe<Scalars['String']['output']>;
  result?: Maybe<NextArrivalsResult>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type NextArrivalsResult = {
  __typename?: 'NextArrivalsResult';
  data?: Maybe<Array<DataNextArrivalsResponse>>;
  line?: Maybe<LineaNextArrivalsResponse>;
  stop?: Maybe<StopNextArrivalsResponse>;
};

export type Query = {
  __typename?: 'Query';
  line: LineResponse;
  lines: LinesResponse;
  nearest_stops: NearestStopsResponse;
  next_arrivals: NextArrivalsResponse;
};


export type QueryLineArgs = {
  code: Scalars['String']['input'];
};


export type QueryLinesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNearest_StopsArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryNext_ArrivalsArgs = {
  lineCode: Scalars['String']['input'];
  stopIdentifier: Scalars['String']['input'];
};

export type Stop = {
  __typename?: 'Stop';
  code: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  identificator: Scalars['String']['output'];
  lat: Scalars['String']['output'];
  lines?: Maybe<Array<Line>>;
  lng: Scalars['String']['output'];
};

export type StopLine = {
  __typename?: 'StopLine';
  abbreviationFlag: Scalars['String']['output'];
  abbreviationFlagGit: Scalars['String']['output'];
  expandedAbbreviationFlag: Scalars['String']['output'];
  line?: Maybe<Line>;
  lineCode: Scalars['String']['output'];
  lineDescription: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  stop?: Maybe<Stop>;
  stopCode: Scalars['String']['output'];
};

export type StopNextArrivalsResponse = {
  __typename?: 'StopNextArrivalsResponse';
  description: Scalars['String']['output'];
  identificator: Scalars['String']['output'];
  lat: Scalars['String']['output'];
  lng: Scalars['String']['output'];
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
  DataNextArrivalsResponse: ResolverTypeWrapper<DataNextArrivalsResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Line: ResolverTypeWrapper<Line>;
  LineResponse: ResolverTypeWrapper<LineResponse>;
  LineSingleResponse: ResolverTypeWrapper<LineSingleResponse>;
  LineaNextArrivalsResponse: ResolverTypeWrapper<LineaNextArrivalsResponse>;
  LinesFindAllResponse: ResolverTypeWrapper<LinesFindAllResponse>;
  LinesResponse: ResolverTypeWrapper<LinesResponse>;
  NearestStopsResponse: ResolverTypeWrapper<NearestStopsResponse>;
  NearestStopsResultResponse: ResolverTypeWrapper<NearestStopsResultResponse>;
  NextArrivalsResponse: ResolverTypeWrapper<NextArrivalsResponse>;
  NextArrivalsResult: ResolverTypeWrapper<NextArrivalsResult>;
  Query: ResolverTypeWrapper<{}>;
  Stop: ResolverTypeWrapper<Stop>;
  StopLine: ResolverTypeWrapper<StopLine>;
  StopNextArrivalsResponse: ResolverTypeWrapper<StopNextArrivalsResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  DataNextArrivalsResponse: DataNextArrivalsResponse;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Line: Line;
  LineResponse: LineResponse;
  LineSingleResponse: LineSingleResponse;
  LineaNextArrivalsResponse: LineaNextArrivalsResponse;
  LinesFindAllResponse: LinesFindAllResponse;
  LinesResponse: LinesResponse;
  NearestStopsResponse: NearestStopsResponse;
  NearestStopsResultResponse: NearestStopsResultResponse;
  NextArrivalsResponse: NextArrivalsResponse;
  NextArrivalsResult: NextArrivalsResult;
  Query: {};
  Stop: Stop;
  StopLine: StopLine;
  StopNextArrivalsResponse: StopNextArrivalsResponse;
  String: Scalars['String']['output'];
};

export type DataNextArrivalsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataNextArrivalsResponse'] = ResolversParentTypes['DataNextArrivalsResponse']> = {
  arrival?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  car_identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  driver_identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flag_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flag_sign_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_adapted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_gps_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schedule_deviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  short_flag_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stop_latitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stop_line_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stop_longitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Line'] = ResolversParentTypes['Line']> = {
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  companyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stopLines?: Resolver<Maybe<Array<ResolversTypes['StopLine']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineResponse'] = ResolversParentTypes['LineResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['LineSingleResponse']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LineSingleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineSingleResponse'] = ResolversParentTypes['LineSingleResponse']> = {
  data?: Resolver<ResolversTypes['Line'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LineaNextArrivalsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineaNextArrivalsResponse'] = ResolversParentTypes['LineaNextArrivalsResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lineDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinesFindAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinesFindAllResponse'] = ResolversParentTypes['LinesFindAllResponse']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<ResolversTypes['Line']>, ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinesResponse'] = ResolversParentTypes['LinesResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['LinesFindAllResponse']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NearestStopsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NearestStopsResponse'] = ResolversParentTypes['NearestStopsResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['NearestStopsResultResponse']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NearestStopsResultResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NearestStopsResultResponse'] = ResolversParentTypes['NearestStopsResultResponse']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<ResolversTypes['Stop']>, ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NextArrivalsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NextArrivalsResponse'] = ResolversParentTypes['NextArrivalsResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['NextArrivalsResult']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NextArrivalsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['NextArrivalsResult'] = ResolversParentTypes['NextArrivalsResult']> = {
  data?: Resolver<Maybe<Array<ResolversTypes['DataNextArrivalsResponse']>>, ParentType, ContextType>;
  line?: Resolver<Maybe<ResolversTypes['LineaNextArrivalsResponse']>, ParentType, ContextType>;
  stop?: Resolver<Maybe<ResolversTypes['StopNextArrivalsResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  line?: Resolver<ResolversTypes['LineResponse'], ParentType, ContextType, RequireFields<QueryLineArgs, 'code'>>;
  lines?: Resolver<ResolversTypes['LinesResponse'], ParentType, ContextType, RequireFields<QueryLinesArgs, 'page' | 'pageSize'>>;
  nearest_stops?: Resolver<ResolversTypes['NearestStopsResponse'], ParentType, ContextType, RequireFields<QueryNearest_StopsArgs, 'latitude' | 'longitude' | 'page' | 'pageSize' | 'radius'>>;
  next_arrivals?: Resolver<ResolversTypes['NextArrivalsResponse'], ParentType, ContextType, RequireFields<QueryNext_ArrivalsArgs, 'lineCode' | 'stopIdentifier'>>;
};

export type StopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stop'] = ResolversParentTypes['Stop']> = {
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  identificator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lines?: Resolver<Maybe<Array<ResolversTypes['Line']>>, ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StopLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['StopLine'] = ResolversParentTypes['StopLine']> = {
  abbreviationFlag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  abbreviationFlagGit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expandedAbbreviationFlag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line?: Resolver<Maybe<ResolversTypes['Line']>, ParentType, ContextType>;
  lineCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lineDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stop?: Resolver<Maybe<ResolversTypes['Stop']>, ParentType, ContextType>;
  stopCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StopNextArrivalsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['StopNextArrivalsResponse'] = ResolversParentTypes['StopNextArrivalsResponse']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  identificator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DataNextArrivalsResponse?: DataNextArrivalsResponseResolvers<ContextType>;
  Line?: LineResolvers<ContextType>;
  LineResponse?: LineResponseResolvers<ContextType>;
  LineSingleResponse?: LineSingleResponseResolvers<ContextType>;
  LineaNextArrivalsResponse?: LineaNextArrivalsResponseResolvers<ContextType>;
  LinesFindAllResponse?: LinesFindAllResponseResolvers<ContextType>;
  LinesResponse?: LinesResponseResolvers<ContextType>;
  NearestStopsResponse?: NearestStopsResponseResolvers<ContextType>;
  NearestStopsResultResponse?: NearestStopsResultResponseResolvers<ContextType>;
  NextArrivalsResponse?: NextArrivalsResponseResolvers<ContextType>;
  NextArrivalsResult?: NextArrivalsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Stop?: StopResolvers<ContextType>;
  StopLine?: StopLineResolvers<ContextType>;
  StopNextArrivalsResponse?: StopNextArrivalsResponseResolvers<ContextType>;
};

