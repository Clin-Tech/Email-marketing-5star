import Sidenav from "../global ui/sidenav/Sidenav";
import Topnav from "../global ui/topnav/Topnav";
import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidenav">
        <Sidenav />
      </div>

      <div className="mainContainer">
        <div className="top">
          <Topnav />
        </div>
        <div className="container">
          {/* The relative thickness of the dataset. Providing a value for weight
          will cause the pie or doughnut dataset to be drawn with a thickness
          relative to the sum of all the dataset weight values. */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
