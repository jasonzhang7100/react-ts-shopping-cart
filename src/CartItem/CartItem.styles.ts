import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 2rem 0;
  border-bottom: 1px solid lightgrey;
  font-family: Arial, Helvetica, sans-serif;

  .information {
    width: 12rem;
  }

  .price,
  .buttons {
    display: flex;
    justify-content: space-between;
    
    p {
      font-size: .8rem;
    }
  }

  img {
    width: 6rem;
    object-fit: contain;
    margin-left: 2rem;
  }
`;
