import { styled } from 'styled-components';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  padding: 0;
  margin: 30px auto;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  color: #333;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  position: relative;
  width: 100%;
  background-image: radial-gradient(
    circle 703px at 87.3% 129.3%,
    rgba(240, 70, 119, 1) 21.4%,
    rgba(255, 160, 128, 1) 50.4%,
    rgba(255, 255, 255, 1) 100.2%
  );
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 15px 0 5px 0;
`;

export const Tag = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 5px 0;
  color: #919191;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #7b7b7b;
  font-weight: 300;
  margin: 10px 0;
  line-height: 20px;
`;

export const CardFooter = styled.div`
  left: 0;
  width: 100%;
  bottom: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const StatsItem = styled.li`
  box-sizing: border-box;
  width: calc(100% / 3);
  text-align: center;
  border-left: 1px solid #ebebeb;
`;

export const StatsItemLabel = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  color: #95989a;
`;

export const StatsItemQuantity = styled.span`
  display: block;
  font-weight: 700;
  font-size: 20px;
  margin-top: 5px;
`;
