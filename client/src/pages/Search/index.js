
// import './style.css';
import React, {useState,} from 'react'
import Card from '../../components/Card';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../../utils/queries";

function Search() {
  
    // let myContacts = [];
    // let myUsername = ''; 
    // let allUsers = [];
    const [searchTerm, setSearchTerm] = useState('');


    // const [addContact] = useMutation(ADD_CONTACT);
    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || {};
    // if(myData){
    //   myContacts = myData.me.contacts;
    //   myUsername = myData.me.username;
    //   console.log(myData)
    // }
    // const {data: userData, loading } = useQuery(QUERY_USERS);

    // if (userData) {
    //   allUsers = userData.users; 
    // }

    // const renderContactList = () => {
    //   if (myContacts.length > 0) {
    //     console.log(myContacts)
    //     return (
    //       <ContactList username={myUsername} contacts={myContacts} />
    //     )            
    //   }      
    // }

    // const handleClick = async (user) => {
    //   console.log(user._id)
    //     try {
    //       await addContact({
    //         variables: { _id: user._id }
    //       });
    //       myContacts = myData.me.contacts;
    //       window.location.assign('/contacts');
          
    //     } catch (e) {
    //       console.log(e)
    //     }
    //   };
    if (loading) {
      return (
        <h4>Loading...</h4>
      )
    } 
    console.log(userData);
      // allUsers.map(user => console.log(user.cards[0]))
      return (
        <div className="Search">
          <center>
          <input type="text" 
          placeholder="Search Contacts..." 
          onChange={event => {setSearchTerm(event.target.value);
          }}
          />
          <hr/>
          {userData.contacts.filter(user => {
            if((user.username).toLowerCase().includes(searchTerm.toLowerCase())) {
              return user;
            } else {
              return "";
            }
          }).map(user => {
            return (
              <div className="user" key={user._id}> 
                <Card data={user.cards[0]}/>
            
              {/* {user.username === myUsername ? '':  */}
              {/* <button onClick={()=>handleClick(user)}>Add Contact</button> */}
              {/* } */}
              </div>
            );
          })
          }
          {/* {allUsers.filter(user => {
              if ((user.username).toLowerCase().includes(searchTerm.toLowerCase())) {
                return user; 
              } else {
                  return "";
              } 
          }).map((user)=> {
              return (
              <div className="user" key={user.username}> 
                  <Card data= {user.cards[0]}/>
               
                {user.username === myUsername ? '': 
                <button onClick={()=>handleClick(user)}>Add Contact</button>
                }
              </div>
              );
          })}
          
          {renderContactList()} */}


          </center>
      </div>
      );      
  

}

export default Search ;