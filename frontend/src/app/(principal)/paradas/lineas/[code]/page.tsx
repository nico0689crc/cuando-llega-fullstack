import { fetchLine, fetchLines } from '@/queries'
import ParadasLineaView from '@/views/paradas/linea'
import { notFound } from 'next/navigation'

type ParadasLineaPageProps = {
  params: Promise<{ code: string }>
}

const ParadasLineaPage = async ({ params }: ParadasLineaPageProps) => {
  const code = (await params).code

  if (!code) {
    return notFound()
  }

  try {
    const line = await fetchLine({ code })
    return <ParadasLineaView data={line} />
  } catch (error) {
    throw new Error('Error fetching line' + error)
  }
}

// export async function generateStaticParams() {
//   const {
//     lines: { result }
//   } = await fetchLines()

//   return (
//     result?.data?.map((line) => ({
//       params: { code: line.code }
//     })) || []
//   ) 
// }

export default ParadasLineaPage
