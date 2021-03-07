// import "/sandbox/src/styles.css";
import "../Header/header.css";

export const Header = () => {
  return (
    <header class="header">
      {/* <!--   Header left div --> */}

      <div class="header_left-icon">
        <h1>
          <span class="orange-background">Keep</span>{" "}
          <span class="dark-grey-color">Notes</span>
        </h1>
      </div>

      {/* <!--   Header middle div --> */}

      <div class="header_search-bar">
        <div class="search-background-div">
          <svg
            class="svg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              // style={{mix-blend-mode: "normal"}}
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#bfbfbf">
                <path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l40.03256,40.03256c3.95599,3.95599 10.37733,3.956 14.33333,0c3.956,-3.956 3.956,-10.37733 0,-14.33333l-40.03256,-40.03256h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path>
              </g>
            </g>
          </svg>
          <input class="input" placeholder="Search" type="text" />
        </div>
      </div>

      {/* <!--   Header right div --> */}

      <div class="header_nav">
        <div class="header_nav-icons">
          <img
            class="img"
            alt="pin"
            src="https://img.icons8.com/ios/24/000000/pin3.png"
          />
          <img
            class="img"
            alt="avatar"
            src="https://img.icons8.com/ios/24/000000/user-male-circle.png"
          />
        </div>
      </div>

      {/* <!--   Header ends here --> */}
    </header>
  );
};
