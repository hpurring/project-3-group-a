import React from 'react';
import { Link } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import me from '../../MOCK_ME.json';

const Profile = () => {

// const { data } = useQuery(QUERY_ME);

  if (!me.cards) {
      return(
          <>
            <Link to='/editform'>
              Create my QRad 
            </Link>
              
          </>
      )
  }

  return(
    <Link to='/editform'>
      Update my QRad 
    </Link>
  )    
}

export default Profile;