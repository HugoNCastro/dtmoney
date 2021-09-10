import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    //background: var(--shape);
    background: ${props => props.theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    //color: var(--text-title);
    color: ${props => props.theme.colors.textTitle};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highlight-background {
      //color: #fff;
      color: ${props => props.theme.colors.shape};
      //background: var(--green);
      background: ${props => props.theme.colors.green};
    }
  }
`;
