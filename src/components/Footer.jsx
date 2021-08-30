import styled from 'styled-components';

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  @media (max-width: 480px) {
    margin-right: 30px;
    font-size: 14px;
  }
`;

const CopyRight = styled.span`
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <CopyRight>&copy; Shin </CopyRight>
      </Wrapper>
    </Container>
  );
};

export default Footer;
