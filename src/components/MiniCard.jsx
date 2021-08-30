import styled from 'styled-components';
import Search from '../img/search.png';

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media (max-width: 480px) {
    width: 50px;
  }
`;

const Image = styled.img`
  width: 20px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet consectetur.</Text>
    </Container>
  );
};

export default MiniCard;
