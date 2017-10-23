/*
 *  Npm import
 */
import React from 'react';


/*
 *  Local import
 */


/*
 * Code
 */
const Settings = () => (
  <div id="settings">
    <h1 id="title">Chatroom</h1>
    <button id="settings-btn" />
    <form id="settings-form">
      <input
        id="settings-input"
        type="text"
        placeholder="username"
        value="anonymous"
      />
      <button id="settings-submit">OK</button>
    </form>
  </div>
);


/*
 * Export default
 */
export default Settings;
