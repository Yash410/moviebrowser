import Hero from "./Hero";
function About() {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              harum, est quae dolor quia quasi suscipit numquam corrupti
              expedita ex incidunt veritatis sed, maiores debitis, quaerat totam
              dolorem facere pariatur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
