import FormContact from 'components/FormContact/FormContact';
import { Container } from './APP.styled';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');

    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    }
    console.log(localContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
    console.log(contacts);
    toggleModal();
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Header showModal={toggleModal} />
      <Filter value={filter} onChange={onChangeFilter} />
      {isShowModal && (
        <Modal closeModal={toggleModal}>
          <FormContact closeModal={toggleModal} addContact={addContact} />
        </Modal>
      )}

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }

//
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//

//   render() {
//     const { filter } = this.state;
//

//   }
// }