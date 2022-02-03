import React from "react";

function stack() {
  return (
    <>
      <div
        style={{
          alignItems: "flex-start",
        }}
      >
        {/* Front-end  */}
        <div>
          <h5 style={{ display: "inline" }}> Front-end : </h5>
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"
            alt="JavaScript"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
          <img
            src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"
            alt="React"
          ></img>
        </div>
        {/* Back-end  */}
        <div>
          <h5 style={{ display: "inline" }}> Back-end : </h5>
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"
            alt="Python"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
          <img
            src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"
            alt="Flask"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
          <img
            src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"
            alt="Node"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>
        {/* Database  */}
        <div>
          <h5 style={{ display: "inline" }}> Database : </h5>
          <img
            src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"
            alt="MongoDB"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>
        {/* Web Application Server  */}
        <div>
          <h5 style={{ display: "inline" }}> Web Application Server : </h5>
          <img
            src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"
            alt="NGINX"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
          <img
            src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=white"
            alt="Gunicorn"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>
        {/* Deep Learning (DL)  */}
        <div>
          <h5 style={{ display: "inline" }}> Deep Learning (DL) : </h5>
          <img
            src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white"
            alt="PyTorch"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>
        {/* Crawling  */}
        <div>
          <h5 style={{ display: "inline" }}> Crawling : </h5>
          <img
            src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white"
            alt="Selenium"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>
        {/* 컨테이너 기반 CI/CD 파이프 라인 구축 */}
        <div>
          <h5 style={{ display: "inline" }}>
            컨테이너 기반 CI/CD 파이프 라인 구축 :{" "}
          </h5>
          <img
            src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"
            alt="Jenkins"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
          <img
            src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"
            alt="Docker"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>
        {/* 테스트 프레임워크 */}
        <div>
          <h5 style={{ display: "inline" }}> 테스트 프레임워크 : </h5>
          <img
            src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white"
            alt="Jest"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>
        {/* 블로그 Graphing Library  */}
        <div>
          <h5 style={{ display: "inline" }}> 블로그 Graphing Library : </h5>
          <img
            src="https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=Plotly&logoColor=white"
            alt="Plotly"
            style={{ display: "inline", marginRight: 10 }}
          ></img>
        </div>

        {/* <img
        src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"
        alt="Flask"
      ></img>
      <img
        src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white"
        alt="Selenium"
      ></img>
      <img
        src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white"
        alt="PyTorch"
      ></img>
      <br />
      <br />
      <img
        src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"
        alt="MongoDB"
      ></img>
      <br />
      <img
        src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"
        alt="Jenkins"
      ></img>
      <img
        src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"
        alt="Docker"
      ></img>
      <br />
      <img
        src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white"
        alt="Jest"
      ></img>
      <img
        src="https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=Plotly&logoColor=white"
        alt="Plotly"
      ></img>
      <img
        src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"
        alt="NGINX"
      ></img>
      <img
        src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=white"
        alt="Gunicorn"
      ></img>{" "}
      <img
        src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"
        alt="Jenkins"
      ></img> */}
      </div>
    </>
  );
}

export default stack;
