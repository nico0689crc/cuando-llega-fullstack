import { fetchNextArrivals } from '@/queries'
import NextArrivalsView from '@/views/arribos'

type NextArrivalsPageProps = {
  params: Promise<{ lineaCode: string; paradaIdentifier: string }>
}

const NextArrivalsPage = async ({ params }: NextArrivalsPageProps) => {
  const lineCode = (await params).lineaCode
  const stopIdentifier = (await params).paradaIdentifier

  try {
    const data = await fetchNextArrivals({ lineCode, stopIdentifier })
    return <NextArrivalsView data={data} lineCode={lineCode} />
  } catch (error) {
    throw new Error('Error fetching next arrivals')
  }
}

export default NextArrivalsPage
