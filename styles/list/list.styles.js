import styled from "styled-components"
import COLORS from "../../constants/colors"

export const UnOrderList = styled.ul`
    width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 6px;
    border-radius: 4px;
    margin: 10px 0;
`

export const List = styled.li`
    width: 700px;
    background: ${ COLORS.pureWhite };
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    border: ${ ({ border }) => border ? `5px solid ${COLORS.red}` : 'none' };
    &:hover {
        background: ${ ({ border }) => border ?  COLORS.pureWhite : COLORS.blue };
    }
`