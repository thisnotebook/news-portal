import React from "react";
import data from "../data.json";
import "./card.css";
//const news = data.results[0];
import Link from "next/link";
import { useRouter } from "next/navigation";
const temp = {
  article_id: "f62d712762fd1bfcb0b36f4962329abd",
  title: "Watch: Videos you may have missed this week",
  link: "https://www.kcra.com/article/watch-videos-missed-june-20/61193719",
  keywords: null,
  creator: null,
  video_url: null,
  description:
    "From a bear snatching a worker's cooler from a truck to crews rescuing 28 people trapped upside down on an amusement park ride, here are some of the videos you may have missed this week.",
  content: "ONLY AVAILABLE IN PAID PLANS",
  pubDate: "2024-06-20 19:41:00",
  image_url:
    "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/bear-steals-cooler-barry-meidinger-00-00-12-08-still001-6671dd0d21c25.jpg",
  source_id: "kcra",
  source_priority: 2967,
  source_url: "https://www.kcra.com",
  source_icon: "https://i.bytvi.com/domain_icons/kcra.png",
  language: "english",
  country: ["united states of america"],
  category: ["top"],
  ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
  sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
  sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
  ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
  ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
};
export const Card = ({news}) => {
  //console.log(data.status,news);
  const router = useRouter();
  const handleAppointmentBtn = () => {
    // console.log(requestData._id);
    let docId = news.article_id;
   // window.location.href = `http://localhost:3000/doctorDetails?id=${docId}`;
   router.push(`news?id=${docId}`);
  }
  return (

      <div className=" w-[250px] h-[410px] font-serif  shadow-lg hover:scale-105 duration-300 ">
        <img
          src={news.image_url}
          alt="image"
          className="rounded-t-md shadow-lg w-[100%] object-cover h-[150px] "
        />
        <div className="p-2">
          <h1
            className="font-semibold text-gray-800 "
            style={{
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              display: "-webkit-box",
            }}
          >
            {" "}
            {news.title}
          </h1>
          <p
            className="text-sm text-gray-500 my-2 "
            style={{
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              display: "-webkit-box",
            }}
          >
            {news.description?news.description : news.title}
          </p>
        </div>
        <div className="flex justify-around  items-center">
            <p className="text-xs text-red-400">{news.language}</p>
          <button
          onClick={handleAppointmentBtn} 
          className=" shadow-md p-1 px-2 bg-blue-600 rounded-md mr-2 text-white font-semibold text-sm font-sans">
            {" "}
            Read full article
          </button>
        </div>  
        <div className="flex gap-1 ml-2 mt-2  ">
            <p className="text-sm">source :</p>
            <a href="https://www.kcra.com" className="text-sm text-blue-500">
              {" "}
              {news.source_id}
            </a>
          </div>
          <p className="text-xs ml-2 mb-2">{news.pubDate}</p>
      </div>

  );
};
