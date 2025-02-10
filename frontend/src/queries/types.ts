export type QueryOptions = {
  page?: number
  pageSize?: number
}

export type LineQueryOptions = QueryOptions

export type NextArrivalsQueryOptions = {
  stopIdentifier: string
  lineCode: string
}

export type LineQueryResult = {
  data: LineType[]
  message: string | null
  statusCode: number | null
  isLoading: boolean
  error: any
}

export type NextArrivalsQueryResult = {
  arrivals: NextArrivalType[]
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
