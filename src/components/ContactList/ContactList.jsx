import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import { List } from './ContactList.styled';


export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);



  //  const findContacts = () => {
    //  const normalizedFilter = filter.toLowerCase();
    //  return contacts.filter(contact =>
    //    contact.name.toLowerCase().includes(normalizedFilter)
    //  );
  //  };

  // const filteredContacts = findContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} phone={number} />;
      })}
    </List>
  );
};

