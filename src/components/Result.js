import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import PropTypes from "prop-types"

const Result = ({ quote }) => {
  return (
    <div className={quote === 0 ? "resultEmpty" : "resultFull"}>
      {quote === 0 ? (
        <p>Choose Brand, Year, and Plan type</p>
      ) : (
        <div>
          <TransitionGroup
            component="div"
            className="result"
          >
            <CSSTransition
             classNames="result"
             key={quote}
             timeout={{ enter: 500, exit: 500}}
            >
              <p>Total: ${quote}</p>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    </div>
  );
};

Result.propTypes = {
    quote: PropTypes.number.isRequired
}
export default Result;
