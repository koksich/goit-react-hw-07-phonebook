import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //  const findContacts = () => {
  //  const normalizedFilter = filter.toLowerCase();
  //  return contacts.filter(contact =>
  //    contact.name.toLowerCase().includes(normalizedFilter)
  //  );
  //  };

  // const filteredContacts = findContacts();

  return (
    <List>
      {contacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone} />;
      })}
    </List>
  );
};
