import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table { 
    width: 100%;
    border-spacing: 0 0.5rem;

    th { 
      //color: var(--text-body);
      color: ${props => props.theme.colors.textBody};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td { 
      padding: 1rem 2rem;
      border: 0;
      //background: var(--shape);
      background: ${props => props.theme.colors.shape};
      //color: var(--text-body);
      color: ${props => props.theme.colors.textBody};
      //border-radius: 0.2rem;

      &:first-child {
        //color: var(--text-title);
        color: ${props => props.theme.colors.textTitle};
      }
      &.deposit {
        //color: var(--green);
        color: ${props => props.theme.colors.green};
      }
      &.withdraw {
        //color: var(--red);
        color: ${props => props.theme.colors.red};
      }
    }
  }
`;