import React from 'react'


const ContactList = ({ username, contacts }) => {
    console.log("contacts: ", contacts)
    return(
        <>
            {/* <h3>{username}'s Contacts</h3>
            {contacts.map(contact => (
                <div key={contact._id}>
                    <Card data={contact.cards[0]}/>    
                </div>
                
            ))}         */}
        </>
    )
}

export default ContactList;
