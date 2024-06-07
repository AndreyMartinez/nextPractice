// Docuementación 01.MD
import { Button, NextUIProvider } from "@nextui-org/react"
interface Props {

}
const indexPage = ({ }: Props): JSX.Element => {
  return (
    <NextUIProvider>
    <p>Hello world</p>
    <Button color="gradient">hello</Button>
    </NextUIProvider>
  )
}

export default indexPage
