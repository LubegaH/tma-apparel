import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: rgb(46, 101, 101);
  color: white;
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: rgb(46, 101, 101);
    border: 1px solid rgb(46, 101, 101);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`;
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: rgb(46, 101, 101);
  border: 1px solid rgb(46, 101, 101);

  &:hover {
    background-color: rgb(46, 101, 101);
    color: white;
    border: none;
  }
`;
