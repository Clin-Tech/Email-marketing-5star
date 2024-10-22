import Sidenav from "../global ui/sidenav/Sidenav";
import Topnav from "../global ui/topnav/Topnav";
import Chart from "./chart/Chart";
import Credits from "./credits/Credits";
import "./dashboard.scss";
import LastEmailCampaign from "./lastEmailCampaign/LastEmailCampaign";
import Metrics from "./metrics/Metrics";
import Subscriber from "./subscriber/Subscriber";

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
        <div className="contentContainer">
          <div className="header">
            <h1>Dashboard</h1>
            <h5>Hello, EMMANUEL EMMY!</h5>
          </div>
          <div className="subscriber">
            <Subscriber />
          </div>
          <div className="credit">
            <Credits />
          </div>
          <div className="graph">
            <Chart />
          </div>
          <div className="lastSent">
            <LastEmailCampaign />
          </div>
          <div className="emailMetrics">
            <Metrics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
