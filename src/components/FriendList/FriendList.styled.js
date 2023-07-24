import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 315px;
  padding: 0;
  margin: 30px auto;
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 20px;
  list-style: none;
  color: #333;
`;

export const ListItem = styled.li`
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ListStatus = styled.span`
  position: relative;
  width: 4px;
  padding-bottom: auto;
  background-color: ${({ 'data-isonline': isOnline }) =>
    isOnline ? '#4AB04F' : '#FF4F52'};
`;

export const ListAvatar = styled.img`
  display: block;
  background: linear-gradient(to bottom, #d5dee7 0%, #e8ebf2 50%, #e2e7ed 100%),
    linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  margin-right: 20px;
`;

export const ListName = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
`;
