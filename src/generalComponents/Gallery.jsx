function Gallery(props) {
  return (
    <div className="row mt-1">
      <div className="col-4 ms-4">
        <a
          toggle="tooltip"
          data-placement="top"
          title="clict to view image"
          target="_blank"
          rel="noreferrer"
          href={"http://127.0.0.1:8000/storage/" + props.image1}>
          {" "}
          <img
            src={"http://127.0.0.1:8000/storage/" + props.image1}
            alt="..."
            style={{ width: "100%", height: "200px" }}
          />
        </a>
      </div>
      <div className="col-4" style={{ marginLeft: "-22px" }}>
        <a
          toggle="tooltip"
          data-placement="top"
          title="clict to view image"
          target="_blank"
          rel="noreferrer"
          href={"http://127.0.0.1:8000/storage/" + props.image2}>
          {" "}
          <img
            src={"http://127.0.0.1:8000/storage/" + props.image2}
            alt="..."
            style={{ width: "100%", height: "200px" }}
          />
        </a>
      </div>
      <div className="col-4 " style={{ marginLeft: "-22px" }}>
        <a
          toggle="tooltip"
          data-placement="top"
          title="clict to view image"
          target="_blank"
          rel="noreferrer"
          href={"http://127.0.0.1:8000/storage/" + props.image3}>
          {" "}
          <img
            src={"http://127.0.0.1:8000/storage/" + props.image3}
            alt="..."
            style={{ width: "100%", height: "200px" }}
          />
        </a>
      </div>
    </div>
  );
}
export default Gallery;
