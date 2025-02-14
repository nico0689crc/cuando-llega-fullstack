// GraphQL queries
import { LinesDocument, useLinesQuery } from '@/__generated__/src/queries/gql/lines.graphql'
import { Next_ArrivalsDocument, useNext_ArrivalsQuery } from '@/__generated__/src/queries/gql/arrives.graphql'

// Types
import {
  LinesQueryOptions,
  LineQueryResult,
  NextArrivalsQueryOptions,
  NextArrivalsQueryResult,
  LineQueryOptions,
  NextArrivalsResponse,
  LinesResponse,
  LineResponse
} from './types'

// Client
import { createClient } from './client/create-client'
import { LineDocument } from '@/__generated__/src/queries/gql/line.graphql'

export const useLines = (options?: Partial<LinesQueryOptions>): LineQueryResult => {
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
    arrivals: data?.next_arrivals.result || null,
    message: data?.next_arrivals.message || null,
    statusCode: data?.next_arrivals.statusCode || null,
    isLoading: loading,
    error
  }
}

export const fetchLines = async (options?: Partial<LinesQueryOptions>): Promise<LinesResponse> => {
  const client = createClient()

  try {
    const {
      data: { lines },
      error,
      networkStatus
    } = await client.query<LinesResponse>({
      query: LinesDocument,
      variables: {
        ...(options?.page ? { page: options.page } : { page: 1 }),
        ...(options?.pageSize ? { pageSize: options.pageSize } : { pageSize: 50 })
      }
    })

    if (error) {
      console.error('Error fetching lines:', error)
    }

    return { lines }
  } catch (error) {
    console.error('Error in fetchLines:', error)
    throw error
  }
}

export const fetchLine = async ({ code }: LineQueryOptions): Promise<LineResponse> => {
  const client = createClient()

  try {
    const {
      data: { line }
    } = await client.query<LineResponse>({
      query: LineDocument,
      variables: {
        code
      }
    })

    return { line }
  } catch (error) {
    console.error('Error in fetchLine:', error)
    throw error
  }
}

export const fetchNextArrivals = async ({
  lineCode,
  stopIdentifier
}: NextArrivalsQueryOptions): Promise<NextArrivalsResponse> => {
  const client = createClient()

  try {
    const { data } = await client.query<NextArrivalsResponse>({
      query: Next_ArrivalsDocument,
      variables: {
        lineCode,
        stopIdentifier
      }
    })

    return data
  } catch (error) {
    console.error('Error in fetchNextArrivals:', error)
    throw error
  }
}
