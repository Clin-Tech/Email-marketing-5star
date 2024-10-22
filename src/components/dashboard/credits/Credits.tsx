import { BorderLinearProgress } from "../../global ui/progressBar";
import "./credits.scss";

function Credits() {
  return (
    <div className="credits shadow-sm p-3 bg-body">
      <div className="title">
        <h3>Credits Used</h3>
        <p>Below is the summary of how you spent your credits</p>
      </div>
      <div className="range">
        <div className="left">
          <div>
            <h6>
              Sending credits <span>10%</span>
            </h6>
            <BorderLinearProgress variant="determinate" value={10} />
          </div>
          <div>
            <h6>
              Campaigns <span>40%</span>
            </h6>
            <BorderLinearProgress variant="determinate" value={40} />
          </div>
        </div>
        <div className="right">
          <div>
            <h6>
              List <span>20%</span>
            </h6>
            <BorderLinearProgress variant="determinate" value={20} />
          </div>
          <div>
            <h6>
              Subscriber <span>80%</span>
            </h6>
            <BorderLinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;
