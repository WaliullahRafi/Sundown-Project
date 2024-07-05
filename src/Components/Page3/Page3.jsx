import React from "react";
import "./Page3.css";
import Featured from "../Hooks/Featured";

function Page3() {
  const handleHover = () => {
    Featured();
  };

  return (
    <div className="page3" onMouseEnter={handleHover}>
      <div className="title">
        <div className="dot"></div>
        <h4>Featured Projects</h4>
      </div>

      <div id="fixed-image"></div>

      <div id="elemContainer">
        <div
          className="elem"
          id="elem1"
          data-image="https://images.unsplash.com/photo-1637666522102-bdb1c9d84b5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>ConverseSoHo</h2>
          <div className="right-details">
            <h4>Converse</h4>
            <span>Environment</span>
          </div>
        </div>

        <div
          className="elem"
          id="elem2"
          data-image="https://images.unsplash.com/photo-1577991712260-4ee45603dab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>NYFW Popup</h2>
          <div className="right-details">
            <h4>Afterpay</h4>
            <span>Experimental</span>
          </div>
        </div>

        <div
          className="elem"
          id="elem3"
          data-image="https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>50th Anniversary</h2>
          <div className="right-details">
            <h4>Nike</h4>
            <span>Environment</span>
          </div>
        </div>

        <div
          className="elem"
          id="elem4"
          data-image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>Capizio NYC Flagship</h2>
          <div className="right-details">
            <h4>Capizio</h4>
            <span>Environment</span>
          </div>
        </div>

        <div
          className="elem"
          id="elem5"
          data-image="https://images.unsplash.com/photo-1551710029-607e06bd45ff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>Makers Studio HOI</h2>
          <div className="right-details">
            <h4>Nike</h4>
            <span>Experimental</span>
          </div>
        </div>

        <div
          className="elem"
          id="elem6"
          data-image="https://images.unsplash.com/flagged/photo-1568733278550-3aa6e87486d0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>Kelce Super Bowl Party</h2>
          <div className="right-details">
            <h4>Web sports entertainment</h4>
            <span>Experimental</span>
          </div>
        </div>

        <div
          className="elem"
          id="elem7"
          data-image="https://images.unsplash.com/photo-1573261658953-8b29e144d1af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>Carmelo Anthony 7pm In Brooklyn Set</h2>
          <div className="right-details">
            <h4>Web sports entertainment</h4>
            <span>Entertainment</span>
          </div>
        </div>

        <div
          className="elem"
          id="elem8"
          data-image="https://images.unsplash.com/photo-1541335370584-dc83f3ad05b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="overlay"></div>
          <h2>Play New Kidvision</h2>
          <div className="right-details">
            <h4>Nike</h4>
            <span>Environment</span>
          </div>
        </div>
      </div>

      <div className="project-btn">
        <h4>
          <a href="#">All Projects</a>
        </h4>
      </div>
    </div>
  );
}

export default Page3;

// 2:09 minute__
