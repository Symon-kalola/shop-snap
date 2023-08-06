import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props) {
  const navigate = useNavigate();

  // this redirects the user to the homepage when they are auready logged in
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  });
  //  end of redirection
  let Component = props.Comp;
  return (
    <div>
      <Component />
    </div>
  );
}
export default Protected;
