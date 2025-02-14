type Stop = {
  code: string
  identificator: string
  description: string
  lat: string
  lng: string
}

type StopLine = {
  stopCode: string
  lineCode: string
  lineDescription: string
  abbreviationFlag: string
  expandedAbbreviationFlag: string
  abbreviationFlagGit: string
  position: number
  stop: Stop
}
