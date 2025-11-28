import reactImage from "../../assets/react-core-concepts.png";
import './Header.css'

const concepts = ["Core", "Fundamental", "Crucial"];

function genRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = concepts[genRandomIndex(2)];
  console.log(reactImage);
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
