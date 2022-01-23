import styled from "styled-components"
import COLORS from "../../constants/colors"

export const Button = styled.button`
    background: ${({ bg }) => bg ? COLORS.white : COLORS.black };
    color: ${({ color }) => color ?  COLORS.black : COLORS.white };
    width: 200px;
    height: 50px;
    border-radius: 5px;
    margin: 0 10px;
    cursor: ${({ cursor }) => cursor ?  "not-allowed" : "pointer" };
`