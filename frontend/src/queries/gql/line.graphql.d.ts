/* 09e1b2594377e829b6818cbe6f14b9426db6134c
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export type LineQueryVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
}>;
export type LineQuery = {
  __typename?: 'Query';
  line: {
    __typename?: 'LineResponse';
    message?: string | null;
    statusCode?: number | null;
    result?: {
      __typename?: 'LineSingleResponse';
      data: {
        __typename?: 'Line';
        code: string;
        description: string;
        entityCode: string;
        companyCode: string;
        stopLines?: Array<{
          __typename?: 'StopLine';
          stopCode: string;
          lineCode: string;
          lineDescription: string;
          abbreviationFlag: string;
          expandedAbbreviationFlag: string;
          abbreviationFlagGit: string;
          position: number;
          stop?: {
            __typename?: 'Stop';
            code: string;
            identificator: string;
            description: string;
            lat: string;
            lng: string;
          } | null;
        }> | null;
      };
    } | null;
  };
};
export declare const LineDocument: Apollo.DocumentNode;
/**
 * __useLineQuery__
 *
 * To run a query within a React component, call `useLineQuery` and pass it any options that fit your needs.
 * When your component renders, `useLineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLineQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export declare function useLineQuery(baseOptions: Apollo.QueryHookOptions<LineQuery, LineQueryVariables> & ({
  variables: LineQueryVariables;
  skip?: boolean;
} | {
  skip: boolean;
})): Apollo.QueryResult<LineQuery, Types.Exact<{
  code: Types.Scalars["String"]["input"];
}>>;
export declare function useLineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LineQuery, LineQueryVariables>): Apollo.LazyQueryResultTuple<LineQuery, Types.Exact<{
  code: Types.Scalars["String"]["input"];
}>>;
export declare function useLineSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LineQuery, LineQueryVariables>): Apollo.UseSuspenseQueryResult<LineQuery | undefined, Types.Exact<{
  code: Types.Scalars["String"]["input"];
}>>;
export type LineQueryHookResult = ReturnType<typeof useLineQuery>;
export type LineLazyQueryHookResult = ReturnType<typeof useLineLazyQuery>;
export type LineSuspenseQueryHookResult = ReturnType<typeof useLineSuspenseQuery>;
export type LineQueryResult = Apollo.QueryResult<LineQuery, LineQueryVariables>;