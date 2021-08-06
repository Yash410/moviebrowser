import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius!
              Nobis odit tenetur obcaecati voluptatum architecto nisi fugit
              placeat sunt aperiam et quia perspiciatis accusantium sint ullam,
              nihil at reprehenderit?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
