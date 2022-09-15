import Layout from "../components/layout/Layout";
import Bio from "../components/sections/Bio";
import Apps from "../components/sections/Apps";
import Skills from "../components/sections/Skills";
import CTA from "../components/sections/CTA";
import Contact from "../components/forms/Contact";

const Home = () => (
  <Layout
    pageTitle="Nicole Dye"
    siteTitle="Art Director"
    heading="Art Director"
    subheading="I design beautiful user experiences."
  >
    <Bio />
    <Apps />
    <CTA />
    <Skills />
    <Contact />
  </Layout>
);

export default Home;
