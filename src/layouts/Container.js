import styled from "styled-components";

const Container = styled.div`
    max-width: ${props => props.theme.containerWidth[props.size] || props.theme.containerWidth.xxl};
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`

export default Container;