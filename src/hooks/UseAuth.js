import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../context/Context';

const UseAuth = () => {
 return useContext(AuthContext)


};

export default UseAuth;