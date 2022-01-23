import styled from "styled-components"
import COLORS from "../../constants/colors"

export const CardBody = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: ${COLORS.grey};
    border: 4px solid ${COLORS.pureWhite};
    border-radius: 4px;
`