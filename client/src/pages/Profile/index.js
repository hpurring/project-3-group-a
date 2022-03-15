import React from 'react';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import me from '../../MOCK_ME.json';

const ProfilePage = () => {

// const { data } = useQuery(QUERY_ME);

  if (!me.cards) {
      return(
          <button>
              Create my QRad
          </button>
      )
  }

  return(
      <button>
        Update my QRad
      </button>
  )    
}

export default ProfilePage;