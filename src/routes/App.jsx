import React, { useState } from "react";
import Landing from "../components/landing.jsx";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderComponent = () => {
    switch (currentPage) {
      case "Landing":
        return <Landing />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  const pagesContent = [
    { Link: "About" },
    { Link: "Landing" },
    { Link: "Contact" },
  ];

  return (
    <>
      <div className="flex gap-4 p-4 underline">
        {pagesContent.map((page) => {
          return (
            <button onClick={() => setCurrentPage(page.Link)}>
              {page.Link}
            </button>
          );
        })}
      </div>
      {renderComponent()}
    </>
  );
}

export default App;
