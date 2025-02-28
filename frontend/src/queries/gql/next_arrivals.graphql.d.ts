/* 074754f132de3f223f547aa46c86a103d2c0d473
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export type Next_ArrivalsQueryVariables = Types.Exact<{
  stopIdentifier: Types.Scalars['String']['input'];
  lineCode: Types.Scalars['String']['input'];
}>;
export type Next_ArrivalsQuery = {
  __typename?: 'Query';
  next_arrivals: {
    __typename?: 'NextArrivalsResponse';
    message?: string | null;
    statusCode?: number | null;
    result?: {
      __typename?: 'NextArrivalsResult';
      stop?: {
        __typename?: 'StopNextArrivalsResponse';
        description: string;
        lat: string;
        lng: string;
        identificator: string;
      } | null;
      line?: {
        __typename?: 'LineaNextArrivalsResponse';
        lineDescription: string;
      } | null;
      data?: Array<{
        __typename?: 'DataNextArrivalsResponse';
        line_description: string;
        flag_description: string;
        arrival: string;
        latitude: string;
        longitude: string;
        stop_latitude: string;
        stop_longitude: string;
        short_flag_description: string;
        flag_sign_description: string;
        is_adapted: string;
        car_identifier: string;
        driver_identifier: string;
        schedule_deviation: string;
        last_gps_date: string;
        error_message: string;
        stop_line_code: string;
        position: string;
      }> | null;
    } | null;
  };
};
export declare const Next_ArrivalsDocument: Apollo.DocumentNode;
/**
 * __useNext_ArrivalsQuery__
 *
 * To run a query within a React component, call `useNext_ArrivalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNext_ArrivalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNext_ArrivalsQuery({
 *   variables: {
 *      stopIdentifier: // value for 'stopIdentifier'
 *      lineCode: // value for 'lineCode'
 *   },
 * });
 */
export declare function useNext_ArrivalsQuery(baseOptions: Apollo.QueryHookOptions<Next_ArrivalsQuery, Next_ArrivalsQueryVariables> & ({
  variables: Next_ArrivalsQueryVariables;
  skip?: boolean;
} | {
  skip: boolean;
})): Apollo.QueryResult<Next_ArrivalsQuery, Types.Exact<{
  stopIdentifier: Types.Scalars["String"]["input"];
  lineCode: Types.Scalars["String"]["input"];
}>>;
export declare function useNext_ArrivalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Next_ArrivalsQuery, Next_ArrivalsQueryVariables>): Apollo.LazyQueryResultTuple<Next_ArrivalsQuery, Types.Exact<{
  stopIdentifier: Types.Scalars["String"]["input"];
  lineCode: Types.Scalars["String"]["input"];
}>>;
export declare function useNext_ArrivalsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Next_ArrivalsQuery, Next_ArrivalsQueryVariables>): Apollo.UseSuspenseQueryResult<Next_ArrivalsQuery | undefined, Types.Exact<{
  stopIdentifier: Types.Scalars["String"]["input"];
  lineCode: Types.Scalars["String"]["input"];
}>>;
export type Next_ArrivalsQueryHookResult = ReturnType<typeof useNext_ArrivalsQuery>;
export type Next_ArrivalsLazyQueryHookResult = ReturnType<typeof useNext_ArrivalsLazyQuery>;
export type Next_ArrivalsSuspenseQueryHookResult = ReturnType<typeof useNext_ArrivalsSuspenseQuery>;
export type Next_ArrivalsQueryResult = Apollo.QueryResult<Next_ArrivalsQuery, Next_ArrivalsQueryVariables>;