import React from 'react';

import StopWatch from '../applications/stop-watch/StopWatch';

class StopWatchView extends React.Component {
  render() {
    return (
        <div style={{ textAlign : 'center' }} >
          <h2 className="App-title">Welcome to Simon's Timer!</h2>
          <p>The timer will start on page load. Please use the buttons according to your needs.</p>
          <div>
            <StopWatch />
          </div>
        </div>
    );
  }
}

export default StopWatchView;
