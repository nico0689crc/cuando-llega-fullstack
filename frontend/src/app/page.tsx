import HomePageWrapper from '@views/HomePageWrapper'
import { getServerMode } from '@core/utils/serverHelpers'

const HomePage = async () => {
  const mode = await getServerMode()

  return <HomePageWrapper mode={mode} />
}

export default HomePage
