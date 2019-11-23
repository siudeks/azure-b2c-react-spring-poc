import React from 'react';
import Authenticator from '../../../Helpers/Authenticator';

export interface LogoutProps {
  authenticator: Authenticator
}

const Logout: React.FC<LogoutProps> = ({authenticator}) => {
  authenticator.logout();
  return (<div>If you're not redirected to login page please close web browser tab.</div>);
};

export default Logout;