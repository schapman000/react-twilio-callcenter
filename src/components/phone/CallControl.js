import Button from '../common/Button.js';
import React, { PropTypes } from 'react';

const CallControl = ({
  status,
  mute,
  hangup,
  call,
  hold,
  muted,
  transfer,
  callSid,
  confSid,
  reservation
}) => {
  let buttons
  if (status == "open") {
    console.log('callSid', callSid);
    buttons =
      <div>
        <Button onClick={hangup} classes={["hangup"]} buttonText="Hangup" />
        <Button onClick={mute} classes={["mute"]} buttonText={muted ? 'Unmute' : 'Mute' } />
        <Button onClick={e => hold(confSid, callSid)} classes={["hold"]} buttonText="Hold" />
        <Button onClick={transfer} classes={["transfer"]} buttonText="Transfer"/>
      </div>
  } else {
    buttons = <Button onClick={e => call()} classes={["call"]} buttonText="Call" />
  }
  return (
    <div id="action-button-container">
      <div id="action-buttons">
        {buttons}
      </div>
    </div>
  )
}

CallControl.propTypes = {
  status: React.PropTypes.string.isRequired,
  hangup: React.PropTypes.func.isRequired,
  mute: React.PropTypes.func.isRequired,
  muted: React.PropTypes.bool.isRequired

}

export default CallControl;