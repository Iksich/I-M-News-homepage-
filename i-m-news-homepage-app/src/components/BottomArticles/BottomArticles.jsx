import { useState } from "react";
function BottomArticle() {
  const [bottomArtData, setBottomArtData] = useState([
    {
      key: "1",
      img: "/img/bottom-img1.jpg",
      number: "01",
      title: "Reviving Retro PCs",
      content: "What happens when old OCs are given modern upgrades?",
    },
    {
      key: "2",
      img: "/img/bottom-img2.jpg",
      number: "02",
      title: "Top 10 Laptops of 2022",
      content: "Our best pics for various needs and budgets.",
    },
    {
      key: "3",
      img: "/img/bottom-img3.jpg",
      number: "03",
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities",
    },
  ]);

  return (
    <div className="bottomArt-container">
      {bottomArtData.map((data) => (
        <div key={data.key} className="bottomArticle">
          <div>
            <img className="bottomArt-img" src={data.img}></img>
          </div>
          <div>
            <div>{data.number}</div>
            <div>{data.title}</div>
            <div>{data.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BottomArticle;
