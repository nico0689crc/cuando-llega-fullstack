import Steppers from "@/@core/components/steppers"
import { ChildrenType } from "@/@core/types"
import { Card, CardContent } from "@mui/material"

const Layout = async ({ children }: ChildrenType) => {
  return (
    <>
      <Steppers />
      <Card sx={{ borderRadius: 1.5 }} className='flex-grow'>
        <CardContent className='flex flex-col min-h-96'>{children}</CardContent>
      </Card>
    </>
  )
}

export default Layout
