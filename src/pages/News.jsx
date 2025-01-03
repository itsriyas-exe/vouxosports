import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import Newsapp from "../components/NewsApp";

/* const sportsNewsData = [
  {
    id: 1,
    title: "Lionel Messi Wins Ballon d'Or 2024",
    description:
      "Lionel Messi secures his 8th Ballon d'Or after an incredible season with Inter Miami and the Argentine national team.",
    image: "https://static.toiimg.com/thumb/msid-113088909,width-1280,height-720,resizemode-4/113088909.jpg",
    date: "December 4, 2024",
  },
  {
    id: 2,
    title: "India Wins Cricket World Cup 2024",
    description:
      "India claims the ICC Cricket World Cup title with a stunning performance in the final against England.",
    image: "https://c.ndtvimg.com/2024-06/09gghv1o_scxs_625x300_30_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    date: "November 30, 2024",
  },
  {
    id: 3,
    title: "NBA 2024 Finals: Lakers Triumph",
    description:
      "The LA Lakers clinch the NBA Championship with a thrilling victory in Game 7 against the Boston Celtics.",
    image: "https://i.ytimg.com/vi/EnCMoDMU-3w/maxresdefault.jpg",
    date: "June 15, 2024",
  },
]; */

const News = () => {
  return (
    <> 
    <Header/>
        {/* <div className="sports-news-container container-fluid">
          <h4 className="text-center text-white mb-5">Latest News</h4>
          <div className="row justify-content-center">
            {sportsNewsData.map((news) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={news.id}>
                <div className="news-card">
                  <img src={news.image} alt={news.title} className="news-image" />
                  <div className="news-content">
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-description">{news.description}</p>
                    <p className="news-date">{news.date}</p>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="warning" style={{width:'200px'}}>Next</Button>
          </div>
        </div> */}
        <Newsapp/>
        <Footer/>
    </>
  );
};

export default News;
