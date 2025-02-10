// GraphQL queries
import { LinesDocument, useLinesQuery } from '@/__generated__/src/queries/gql/lines.graphql'
import { useNext_ArrivalsQuery } from '@/__generated__/src/queries/gql/arrives.graphql'

// Types
import { LineQueryOptions, LineQueryResult, NextArrivalsQueryOptions, NextArrivalsQueryResult } from './types'

// Client
import { createClient } from './client/create-client'

export const useLines = (options?: Partial<LineQueryOptions>): LineQueryResult => {
  const {
    loading: isLoading,
    error,
    data
  } = useLinesQuery({
    variables: {
      ...(options?.page && { page: options.page }),
      ...(options?.pageSize && { pageSize: options.pageSize })
    },
    notifyOnNetworkStatusChange: true
  })

  return {
    data:
      data?.lines.result?.data.map((line: any) => ({
        code: line.code,
        description: line.description,
        stops: line.stopLines.map((stop: any) => ({
          stopCode: stop.stopCode,
          lineCode: stop.lineCode,
          lineDescription: stop.lineDescription,
          abbreviationFlag: stop.abbreviationFlag,
          expandedAbbreviationFlag: stop.expandedAbbreviationFlag,
          abbreviationFlagGit: stop.abbreviationFlagGit,
          position: stop.position,
          stop: {
            description: stop.stop.description,
            lat: stop.stop.lat,
            lng: stop.stop.lng,
            identificator: stop.stop.identificator,
            code: stop.stop.code
          }
        }))
      })) || [],
    message: data?.lines.message || null,
    statusCode: data?.lines.statusCode || null,
    isLoading,
    error
  }
}

export const useNextArrivals = (options: NextArrivalsQueryOptions): NextArrivalsQueryResult => {
  const { loading, error, data } = useNext_ArrivalsQuery({
    variables: {
      stopIdentifier: options.stopIdentifier,
      lineCode: options.lineCode
    }
  })

  return {
    arrivals: data?.next_arrivals.result || [],
    message: data?.next_arrivals.message || null,
    statusCode: data?.next_arrivals.statusCode || null,
    isLoading: loading,
    error
  }
}

export const fetchLines = async (options?: Partial<LineQueryOptions>) => {
  const client = createClient()
  const { data } = await client.query({
    query: LinesDocument,
    variables: {
      ...(options?.page && { page: options.page }),
      ...(options?.pageSize && { pageSize: options.pageSize })
    }
  })

  return data
}
