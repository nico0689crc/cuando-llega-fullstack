export type QueryOptions = {
  page?: number
  pageSize?: number
}

export type LinesQueryOptions = QueryOptions

export type LineQueryOptions = {
  code: string
}

export type NextArrivalsQueryOptions = {
  stopIdentifier: string
  lineCode: string
}
export type ApiResponse<T, K extends string> = {
  [key in K]: {
    message: string
    statusCode: number
    result: T | null
  }
}

export type LineResponse = ApiResponse<
  {
    data: {
      code: string
      description: string
      entityCode: string
      companyCode: string
      stopLines: Array<{
        stopCode: string
        lineCode: string
        lineDescription: string
        abbreviationFlag: string
        expandedAbbreviationFlag: string
        abbreviationFlagGit: string
        position: number
        stop: {
          code: string
          identificator: string
          description: string
          lat: string
          lng: string
        }
      }>
    }
  },
  'line'
>

export type LinesResponse = ApiResponse<
  {
    totalItems: number
    totalPages: number
    currentPage: number
    pageSize: number
    data: LineType[]
  },
  'lines'
>

export type NextArrivalsResponse = ApiResponse<
  Array<{
    line_description: string
    flag_description: string
    arrival: string
    latitude: string
    longitude: string
    stop_latitude: string
    stop_longitude: string
    short_flag_description: string
    flag_sign_description: string
    is_adapted: string
    car_identifier: string
    driver_identifier: string
    schedule_deviation: string
    last_gps_date: string
    error_message: string
    stop_line_code: string
    position: string
  }>,
  'next_arrivals'
>

export type LineQueryResult = {
  data: LineType[]
  message: string | null
  statusCode: number | null
  isLoading: boolean
  error: any
}

export type NextArrivalsQueryResult = {
  arrivals: NextArrivalType[] | null
  message: string | null
  statusCode: number | null
  isLoading: boolean
  error: any
}

export type StopType = {
  stopCode: string
  lineCode: string
  lineDescription: string
  abbreviationFlag: string
  expandedAbbreviationFlag: string
  abbreviationFlagGit: string
  position: string
  stop: {
    description: string
    lat: number
    lng: number
    identificator: string
    code: string
  }
}

export type LineType = {
  code: string
  description: string
  stops: StopType[]
}

export type NextArrivalType = {
  line_description: string
  flag_description: string
  arrival: string
  latitude: string
  longitude: string
  stop_latitude: string
  stop_longitude: string
  short_flag_description: string
  flag_sign_description: string
  is_adapted: string
  car_identifier: string
  driver_identifier: string
  schedule_deviation: string
  last_gps_date: string
  error_message: string
  stop_line_code: string
  position: string
}
