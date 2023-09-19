import "./App.css";
import Gaugecharts from "./gaugecharts.js";
import LineChart from "./linechart";
import MultiSeries from "./multiserieschart";
import StackedDualAxis from "./stackeddualaxis";
function App() {
  return (
    <div className="App" style={{backgroundColor:'grey'}}>
      <div
        style={{ width: "100%", height: "20px", backgroundColor: "navy" }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "20px",
          marginBottom: "5px",
          display: "flex",
          float: "left",
          backgroundColor:'floralwhite'
        }}
      >
        <i class="bi bi-arrow-left"></i>
        <span
          style={{
            marginLeft: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </span>
        <span style={{ marginLeft: "5px" }}>Financial Management</span>
      </div>

      <div
        className="row"
        style={{
          minHeight: "400px",
          width: "100%",
          backgroundColor: "grey",
          margin:'5px'
        }}
      >
        {/* <div style={{width:'300px',height:'300px'}}> */}
        {/* <Gaugecharts value={28} /> */}
        <div className="col" style={{ width: "60%", height: "300px" }}>
          <div className="row">
            <span
              className="col"
              style={{
                height: "100px", paddingTop:'15px',
                width: "25%",
                backgroundColor: "white",
                margin: "5px 0px 5px 5px",
              }}
            >
              <h6>Total Accounts Receivable</h6>
              <h2 style={{color:'blue'}}>$ 6,621,280</h2>
            </span>
            <span
              className="col"
              style={{
                height: "100px", paddingTop:'15px',
                width: "25%",
                backgroundColor: "white",
                margin: "5px 0px 5px 5px",
              }}
            >
              <h6>Total Accounts Payable</h6>
              <h2 style={{color:'red'}}>$ 1,630,270</h2>{" "}
            </span>
            <span
              className="col"
              style={{
                height: "100px", paddingTop:'15px',
                width: "25%",
                backgroundColor: "white",
                margin: "5px 0px 5px 5px",
              }}
            >
              <h6>Equity Ratio</h6>
              <h2 style={{color:'navy'}}>75.38%</h2>
            </span>
            <span
              className="col"
              style={{
                height: "100px", paddingTop:'15px',
                width: "25%",
                backgroundColor: "white",
                margin: "5px 5px 5px 5px",
              }}
            >
              <h6>Debt Equity</h6>
              <h2 style={{color:'blue'}}>1.10%</h2>{" "}
            </span>
          </div>
          <div
            className="row"
            style={{ height: "200px", backgroundColor: "yellow" }}
          >
            <span
              className="col"
              style={{
                height: "200px",
                width: "25%",
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gaugecharts
                value={1.86}
                upperLimit={3}
                color={"#0000FF"}
                title={"Current Ratio"}
              />
            </span>
            <span
              className="col"
              style={{
                height: "200px",
                width: "25%",
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gaugecharts
                value={10}
                upperLimit={31}
                color={"#FFFF00"}
                title={"DSI"}
                subtitle={"[Days Sales Inventory]"}
              />
            </span>
            <span
              className="col"
              style={{
                height: "200px",
                width: "25%",
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gaugecharts
                value={7}
                upperLimit={31}
                color={"#FF0000"}
                title={"DSO"}
                subtitle={"[Days Sales Outstanding]"}
              />
            </span>
            <span
              className="col"
              style={{
                height: "200px",
                width: "25%",
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gaugecharts
                value={28}
                upperLimit={31}
                color={"#008000"}
                title={"DPO"}
                subtitle={"[Days Payable Outstanding]"}
              />
            </span>
          </div>
        </div>
        <div className="col" style={{ maxWidth: "40%", height: "300px",marginTop:'5px' }}>
          <span
            className="col"
            style={{
              height: "300px",
              width: "40%",
              backgroundColor: "grey",
            }}
          >
            <MultiSeries />
          </span>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "grey" }}>
        {" "}
        <div className="col" style={{ minWidth: "45%", margin: "15px" }}>
          <LineChart />
        </div>{" "}
        <div
          className="col"
          style={{ maxWidth: "55%", maxHeight: "700px", margin: "15px 15px 15px -10px" }}
        >
          <StackedDualAxis />
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
