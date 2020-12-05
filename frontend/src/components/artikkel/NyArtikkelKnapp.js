/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthContext } from '../../context/AuthProvider';

const NyArtikkelKnapp = () => {
  const { isLoggedIn, isAdmin } = useAuthContext();
  return (
    <div>
      {isLoggedIn && isAdmin && (
        <a href="/nyartikkel" className="button">
          NY ARTIKKEL
        </a>
      )}
    </div>
  );
};

export default NyArtikkelKnapp;
