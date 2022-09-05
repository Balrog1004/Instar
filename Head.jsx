import React from "react";
import "../styles/Head.css";
import {
  FaRegComment,
  FaSearch,
  FaHome,
  FaUserAlt,
  FaPlusSquare,
} from "react-icons/fa";
const Head = ({ setLoginToggle, onLoginToggle }) => {
  return (
    <div className="Topbar">
      <div className="navbar bg-base-100 Topbar_logo">
        <div className="flex-1">
          <a
            href="http://localhost:3000/"
            className="btn btn-ghost normal-case text-xl"
          >
            instargram
          </a>
        </div>

        <div className="flex-none gap-5">
          
          <div className="search">
          <input
            type="text"
            placeholder="검색"
          />
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
          </div>
          <a href="#">
            <FaHome style={{ fontSize: "25px" }} />
          </a>
          <a href="#">
            <FaRegComment style={{ fontSize: "25px" }} />
          </a>
          <a href="#">
            <FaPlusSquare style={{ fontSize: "25px" }} />
          </a>
          {/* onClick={()=>{serch()}} */}
          <button
            onClick={() => {
              onLoginToggle();
            }}
          >
            <a href="#">
              <FaUserAlt style={{ fontSize: "25px" }} />
            </a>
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  href="https://www.instagram.com/anjjaaang/"
                  className="justify-between"
                >
                  프로필
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>저장됨</a>
              </li>
              <li>
                <a>설정</a>
              </li>
              <li>
                <a>계정변환</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
