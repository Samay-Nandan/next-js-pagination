import styled from "styled-components"
import COLORS from "../../constants/colors"

export const Layout = styled.div`
    background: ${({ bg }) => bg ? COLORS.yellow : COLORS.pureWhite};
    width: 100%;
    min-height:100vh;
`