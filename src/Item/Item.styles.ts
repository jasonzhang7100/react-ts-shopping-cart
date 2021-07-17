import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-width: 15rem;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 1.5rem;

  img {
    height: 15rem;
    padding: 1rem;
    object-fit: contain;
  }

  div {
    height: 100%;
    padding: 0 1rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }

  p {
    text-align: left;
  }
`;
