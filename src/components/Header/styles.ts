import styled from "styled-components"; 
import { darken } from "polished";

export const Container = styled.header`
  //background: var(--blue);
  background: ${props => props.theme.colors.primary};
  div {
    display: flex;
    align-items: center;
    color: ${props => darken(0.5, props.theme.colors.textBody)};
  }
  p {
    margin: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button { 
    font-size: 1rem;
    //color: #fff;
    //background: var(--blue-light);
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.shape};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;