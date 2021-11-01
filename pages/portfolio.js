import Layout from "../components/Layout";
import TextHeading from "../components/TextHeading";
import Card from "../components/Card";
import Meta from "../components/Meta";

const portfolio = () => {
  return (
    <Layout>
      <Meta title="Portfolio" />
      <section className="section">
        <TextHeading text="PORTFOLIOS" color="#f8f4f4" />
        <div className="grid grid-col-4 grid-gap-1">
          <Card>
            <h1>Portfolio</h1>
          </Card>
          <Card>
            <h1>Portfolio</h1>
          </Card>
          <Card>
            <h1>Portfolio</h1>
          </Card>
          <Card>
            <h1>Portfolio</h1>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default portfolio;
