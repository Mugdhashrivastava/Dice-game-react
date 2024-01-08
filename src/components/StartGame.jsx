import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="src/assets/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 10 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  display: flex;
  min-width: 220px;
  padding: 10px 18px;
  color:white;
  font-size: 16px;
  border:1px solid transparent;

  border-radius: 5px;
  background: #000;
  border: none;
  cursor: pointer;


  &:hover {
    background-color: white;
    border:1px solid black;
    color:black;
    transition: 0.4s background ease-in;

  }
`;
