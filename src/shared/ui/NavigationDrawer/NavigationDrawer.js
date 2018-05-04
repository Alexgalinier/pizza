import React from 'react';
import './NavigationDrawer.css';

export default ({ close, children }) => (
  <div
    className="drawer-overlay"
    onClick={e => (e.target.className === 'drawer-overlay' ? close() : null)}
  >
    <div className="Drawer">{children}</div>
  </div>
);
