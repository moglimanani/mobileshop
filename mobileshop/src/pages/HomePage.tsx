import { memo } from "react"
import { Button } from "react-bootstrap"

const HomePage = () => {
    return (
        <>Home  <Button as="a" variant="primary">
        Button as link
      </Button></>
    )
}

export default memo(HomePage)