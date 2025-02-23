import { fetchLines } from '@/queries'
import ParadasLinesView from '@/views/paradas/lineas'

const LineasPage = async () => {
  try {
    const lines = await fetchLines()
    return <ParadasLinesView data={lines} />
  } catch (error) {
    throw new Error('Error fetching lines' + error)
  }
}

export default LineasPage
