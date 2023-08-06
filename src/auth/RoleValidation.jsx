function Role() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  if (user.role === "shop") {
    return "/" + user.id + "/shops/";
  } else {
    return "/";
  }
}
export default Role;
