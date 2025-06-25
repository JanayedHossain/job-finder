import React, { Suspense } from "react";
import Banner from "../../components/banner/Banner";
import HowItWorks from "../../components/how-it-works/HowItWorks";
import Companies from "../../components/companies/Companies";
import Testimonials from "../../components/Testimonials/Testimonials";
import Faq from "../../components/faq/Faq";
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet-async";

const jobsData = fetch("/jobs.json").then((res) => res.json());
const feedback = fetch("/feedback.json").then((res) => res.json());
const faq = fetch("/faq.json").then((res) => res.json());
const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>JobFinder | Home</title>
      </Helmet>
      <Banner />
      <HowItWorks />
      <Suspense fallback={<Loading />}>
        <Companies jobsData={jobsData} />
        <Testimonials allFeedback={feedback} />
        <Faq allFaq={faq} />
      </Suspense>
    </div>
  );
};

export default Homepage;
