import { useState } from "react";

function Sidebar() {
  const [sidebarData, setSidebarData] = useState([
    {
      key: "1",
      title: "Hydrogen VS Electirc Cars",
      content: "Will hydrogen-fueled cars ever catch up to EV's?",
    },
    {
      key: "2",
      title: "The Downsides of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      key: "3",
      title: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YDY. We take a look at ehat that means.",
    },
  ]);
  return (
    <div className="sidebar">
      <h1>New</h1>
      {sidebarData.map((data) => (
        <div className="sideArticle" key={data.key}>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
