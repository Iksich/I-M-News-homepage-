import Photo from "./Photo";
import Button from "./Button";
import Title from "./Title";
import Content from "./Content";
import Sidebar from "../Sidebar/Sidebar";

function Main() {
  return (
    <div name="container" className="main">
      <div name="main-content">
        <div>
          <Photo />
        </div>
        <div className="main-content-subcontainer">
          <Title />
          <div className="content-and-button-container">
            <Content />
            <Button />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Main;
