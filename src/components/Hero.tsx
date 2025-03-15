// src/components/Hero.tsx
import React from "react";
import Lightsaber from "./Lightsaber";
import HorizontalLightsaberDivider from "./HorizontalLightsaberDivider";

export default function Hero() {

  return (
    <div className="relative w-full overflow-hidden bg-black text-yellow-400 pt-20">
      {/* Render Lightsabers */}
      <Lightsaber side="left" color="#00aaff" />
      <Lightsaber side="right" color="#ff0000" />

      {/* Crawl Text Container */}
      <div className="w-full flex justify-center items-center herosaber">
        <div className="flex justify-center">
          <HorizontalLightsaberDivider side="left" color="#00aaff" />
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center w-full">
        <div className="crawl-container">
          <div className="crawl-text">
            <h1>Hello There!</h1>
            <h1>{`I'm Adithya Kiran`}</h1>
            <p>
              {`I'm a versatile Software Engineer with expertise in full-stack
              development, backend development, cloud infrastructure, and
              AI-powered developer tools. Currently pursuing my Master's in
              Computer Science at NC State (May 2025), I specialize in Machine
              Learning, Artificial Intelligence, and Distributed Systems.`}
            </p>
            <p>
              {`With professional experience at ScienceLogic and Kickdrum
              Technologies, I've built scalable systems, automated cloud
              workflows, built tools to improve productivity and efficiency, and
              set up data processing pipelines to handle petabytes of data!
              Passionate about distributed systems, AI-driven development, and
              performance optimization, I enjoy collaborating with others to
              solve complex engineering challenges.`}
            </p>
            <p>
              {`Outside of tech, I enjoy watching action and mystery movies and
              shows. I'm a huge fan of Star Wars. I enjoy football and am an
              avid supporter of FC Barcelona. 80/90s rock is my favourite genre
              of music.`}
            </p>
            {/* <h2 className="text-blue-400">
              Scroll down to learn more about me as a software engineer!
            </h2> */}
          </div>
        </div>
      </div>
      <div className="w-full pt-7 flex justify-center items-center herosaber">
        <div className="flex justify-center">
          <HorizontalLightsaberDivider side="right" color="#ff0000" />
        </div>
      </div>

      {/* <style jsx>{`
        
        @media (min-width: 641px) {
          .crawl-container {
            position: relative;
            width: 100%;
            max-width: 60%;
            height: auto; 
            perspective: 1000px;
          }
          .crawl-text {
            position: relative;
            top: 100%;
            width: 98%;
            left: 50%;
            transform: translateY(-100%);
            font-size: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            transform-origin: top center;
            animation: crawl 5s linear forwards;
          }
          .crawl-text h1 {
            margin-bottom: 2rem;
            font-size: 2.5rem;
          }
          .crawl-text h2 {
            margin-bottom: 2rem;
            font-size: 1.5rem;
          }
          .crawl-text p {
            margin-bottom: 1rem;
          }
          @keyframes crawl {
            0% {
              top: 100%;
              transform: translateX(-50%) rotateX(15deg);
            }
            100% {
              top: 0;
              transform: translateX(-50%) rotateX(15deg);
            }
          }
        }

        
        @media (max-width: 640px) {
          .crawl-container {
            width: 90%;
            max-width: 90%;
            height: auto; 
            perspective: none;
            // padding-bottom: 2rem; 
          }
          .crawl-text {
            position: relative; 
            top: auto;
            transform: none;
            font-size: 1rem;
            line-height: 1.4rem;
            text-align: center;
            animation: none; 
            margin-top: 2rem;
            // margin-bottom: 2rem;
          }
          .crawl-text h1 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }
          .crawl-text h2 {
            font-size: 1.25rem;
            // margin-bottom: 1.5rem;
          }
        }
      `}</style> */}

<style jsx>{`
  /* For medium and larger screens */
  @media (min-width: 641px) {
    .herosaber{
      display: none;
    }
    .crawl-container {
      position: relative;
      width: 100%;
      max-width: 60%;
      height: auto;
      padding-top: 2rem; /* Prevents header overlap */
      overflow: hidden; /* Prevents text from being visible before animation */
    }
    .crawl-text {
      position: relative;
      width: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
      font-size: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
      transform-origin: top center;
      animation: crawl 3s linear forwards;
    }
    .crawl-text h1 {
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
    .crawl-text h2 {
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
    .crawl-text p {
      margin-bottom: 1rem;
    }
    @keyframes crawl {
      0% {
        transform: translateX(-50%) translateY(100%);
      }
      100% {
        transform: translateX(-50%) translateY(0%);
      }
    }
  }

  /* For small screens */
  @media (max-width: 640px) {
    .crawl-container {
      width: 90%;
      max-width: 90%;
      height: auto;
      // padding-top: 5rem; /* Pushes text down to avoid clipping */
      perspective: none;
    }
    .crawl-text {
      position: relative;
      top: auto;
      transform: none;
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: center;
      animation: none;
      margin-top: 2rem;
    }
    .crawl-text h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    .crawl-text h2 {
      font-size: 1.25rem;
    }
  }
`}</style>




    </div>
  );
}
