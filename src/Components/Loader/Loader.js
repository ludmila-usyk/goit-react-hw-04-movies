import Loader from "react-loader-spinner";

export function Load() {
  return <Loader
        style={{ textAlign: "center", marginTop: "15px" }}
        type="Circles"
        color="rgba(0, 128, 128, 0.60)"
        height={100}
        width={100}
        timeout={3000}
      />;
}