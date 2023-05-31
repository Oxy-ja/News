import React from "react";
import "./NewsItems.css";

import News1 from "./image/news1.png";
import News2 from "./image/news2.png";
import News3 from "./image/news3.png";
import News4 from "./image/news4.png";
import News5 from "./image/news5.png";
import News6 from "./image/news6.png";
import News7 from "./image/news7.png";
import News8 from "./image/news8.png";
import News9 from "./image/news9.png";

function NewsItems() {
  return (
    
    <div className="NewsItems">
    <div className="NewsItem">
      <img src={News1} alt="news1" />
      
        <div>
          <div className="date"> 17.02.2023</div>
          <div className="title">Состоялась отраслевая инвестиционная встреча
    по теме: «Развитие туризма. Строительство глэмпингов»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News2} alt="news2" />
      
        <div>
          <div className="date"> 17.02.2023</div>
          <div className="title">Cостоялась отраслевая инвестиционная встреча по теме: «Установка камер безопасности дорожного движения на территории Ярославской области»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News3} alt="news3" />
      
        <div>
          <div className="date"> 01.03.2023</div>
          <div className="title">Состоялась отраслевая инвестиционная встреча
по теме: «Строительство многоквартирных домов»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News4} alt="news4" />
      
        <div>
          <div className="date"> 10.03.2023</div>
          <div className="title">Cостоялась отраслевая инвестиционная встреча
по теме: «Развитие туризма. Строительство отелей»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News5} alt="news5" />
      
        <div>
          <div className="date"> 17.03.2023</div>
          <div className="title">Cостоялась отраслевая инвестиционная встреча 
по теме: «Индивидуальное жилищное строительство»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News6} alt="news6" />
      
        <div>
          <div className="date"> 07.04.2023</div>
          <div className="title">Cостоялась отраслевая инвестиционная встреча
по теме: «Инвестиционная привлекательность Ярославской области в сфере развития аквакультуры и переработки рыбы. Любительское рыболовство и агротуризм»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News7} alt="news7" />
      
        <div>
          <div className="date"> 20.04.2023</div>
          <div className="title">Делегация Ярославской области принимает участие во всероссийском форуме «Госзаказ»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News8} alt="news8" />
      
        <div>
          <div className="date"> 21.04.2023</div>
          <div className="title">Cостоялась отраслевая инвестиционная встреча
по теме: «Развитие досуговой инфраструктуры. Строительство ресторанов, кафе, музеев, термальных источников и иных точек притяжения»</div>
        </div>
      </div>
    <div className="NewsItem">
      <img src={News9} alt="news9" />
      
        <div>
          <div className="date"> 13.05.2023</div>
          <div className="title">Заместитель губернатора обсудил с жителями Некоузского и Брейтовского районов волнующие их вопросы</div>
        </div>
      </div>

      </div>
  )
}

export default NewsItems;
