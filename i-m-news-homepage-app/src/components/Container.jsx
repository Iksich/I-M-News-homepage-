import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import BottomArticle from "./BottomArticles/BottomArticles";
function Container() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <BottomArticle />
    </div>
  );
}
export default Container;
