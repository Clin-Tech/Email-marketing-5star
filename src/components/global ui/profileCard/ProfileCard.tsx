import { Link } from "react-router-dom";
import "./profileCard.scss";

function ProfileCard() {
  return (
    <div className="dropdown profileCard">
      {/* <div className="dropdown profile"> */}
      <div
        // className="dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-display="static"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          border: "none",
          outline: "none",
        }}
      >
        <img
          src="/avatar.png"
          alt=""
          style={{ width: "2em", height: "1.8em" }}
        />
        <h6>Odejinmi Emmanuel</h6>
        <i className="fa-solid fa-chevron-down fa-beat"></i>
      </div>

      <ul
        className="dropdown-menu dropdown-menu-end "
        aria-labelledby="dropdownMenuButton1"
        style={{ marginRight: "10px" }}
      >
        <p className="more">More</p>
        <li className="dropdown-item">
          <img
            src="/settings-icon.png"
            alt=""
            style={{ width: "1.2em", height: "1em" }}
          />
          <Link to={""}>
            Settings <span>Change Password</span>
          </Link>
        </li>
        <li className="dropdown-item">
          <img
            src="/profile-icon.png"
            alt=""
            style={{ width: "1.2em", height: "1em" }}
          />
          <Link to={""}>
            Profile <span>Update your profile</span>{" "}
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
}

export default ProfileCard;
