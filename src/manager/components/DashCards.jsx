function DashCards() {
  return (
    <>
      {/* <!--sumarry cards start-->  */}

      <section id="sumary-cards">
        <div className="container-fluid  shadow-lg border-bottom pt-2">
          <div className="row g-3 ">
            <div className="col-md-4">
              <div className="card py-4 shadow-lg bg-success">
                <div className="text-center text-light h1  fa fa-user"></div>
                <div className="text-center text-light h4">Products</div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="card shadow-lg py-4 bg-warning">
                <div className="text-center text-light h1  fa fa-bell"></div>
                <div className="text-center text-light h4">Shops</div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="card shadow-lg py-4 bg-primary">
                <div className="text-center text-ligt h1  fa fa-shopping-cart"></div>
                <div className="text-center text-light h4">views</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--sumarry cards end-->  */}
    </>
  );
}
export default DashCards;
