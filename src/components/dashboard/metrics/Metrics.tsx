import LineChartWithBackground from "../../global ui/lineChart";
import "./metrics.scss";

function Metrics() {
  return (
    <div className="metrics shadow-sm bg-body">
      <div className="left">
        <LineChartWithBackground />
      </div>
      <div className="right">
        <div className="title">
          <p>
            <i
              className="fa-solid fa-clock-rotate-left"
              style={{ fontSize: "15px" }}
            ></i>{" "}
            Activity log
          </p>
        </div>

        <h6>You Created a new "EMMY IMACULATE"</h6>

        <p id="time">9/3/2024, 7:30:43 PM</p>
      </div>
    </div>
  );
}

export default Metrics;
