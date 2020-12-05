/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthContext } from '../../context/AuthProvider';
import { SlettKnapp, RedigerKnapp } from '../../styled/style';

const DeleteEditKnapp = (props) => {
  const { isLoggedIn, isAdmin } = useAuthContext();
  return (
    <div>
      {isLoggedIn && isAdmin && (
        <div>
          <SlettKnapp type="button" onClick={props.delete}>
            SLETT
          </SlettKnapp>
          <RedigerKnapp type="button" onClick={props.edit}>
            REDIGER
          </RedigerKnapp>
        </div>
      )}
    </div>
  );
};

export default DeleteEditKnapp;
