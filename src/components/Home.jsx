import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="container mt-4">
        <Header />
        <main>
          <section className="text-center mt-5">
            <h2>Welcome to Financial App</h2>
            <p>
              Track your expenses, income, and get a financial summary
              effortlessly.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
