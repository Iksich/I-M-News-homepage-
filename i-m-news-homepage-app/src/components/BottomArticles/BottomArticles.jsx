import { useState } from "react";

function BottomArticle(props) {
  const [bottomArtData, setBottomArtData] = useState([
    {
      img: "",
      number: "01",
      title: "Reviving Retro PCs",
      content: "What happens when old OCs are given modern upgrades?",
    },
    {
      img: "",
      number: "02",
      title: "Top 10 Laptops of 2022",
      content: "Our best pics for various needs and budgets.",
    },
    {
      img: "",
      number: "03",
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities",
    },
  ]);

  return (
    <div className="bottomArt-container">
      {bottomArtData.map((data) => (
        <div className="bottomArticle">
          <div className="bottomArt-img-placeholder">{data.img}</div>
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
