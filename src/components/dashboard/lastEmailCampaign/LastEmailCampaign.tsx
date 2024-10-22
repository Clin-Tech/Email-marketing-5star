import "./lastEmailCampaign.scss";

function LastEmailCampaign() {
  return (
    <div className="lastEmailCampaign shadow-sm mb-5 bg-body">
      <div className="title">
        <p>Last sent Email campaign</p>
      </div>
      <div className="create">
        <button className="createBtn">Create New Email Campaign</button>
        <div className="email">
          <div className="left">
            <img src="/megaDp.png" alt="" />
            <p>
              Mega Steez Challenge <span>SENT 2024-09-05 21:45:06</span>{" "}
            </p>
          </div>
          <div className="right">
            <p className="delivered">
              2084 <span>delivered</span>
            </p>
            <p className="opened">
              67 <span>opened</span>
            </p>
            <p className="clicks">
              0 <span>clicks</span>
            </p>
            <button>
              <i className="fa-solid fa-chart-column"></i> View report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastEmailCampaign;
