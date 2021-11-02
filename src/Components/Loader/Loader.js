import Loader from "react-loader-spinner";

export function Load() {
  return <Loader
        style={{ textAlign: "center", marginTop: "15px" }}
        type="Circles"
        color="#f0dcfa"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />;
}