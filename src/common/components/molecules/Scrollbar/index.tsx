import { FC } from "react"
import { Scrollbars } from "react-custom-scrollbars"

const Scrollbar: FC = ({ children }) => {
    return <Scrollbars>{children}</Scrollbars>
}

export default Scrollbar
