import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableContactTable contacts={CONTACTS} />
    </div>
  );
}

export default App;

class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.email}</td>
      </tr>
    );
  }
}
class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact, index) => {
      rows.push(<ContactRow contact={contact} key={index}/>);
    });
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
class SearchBar extends React.Component {


  render() {
    return (
      <div>
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            onChange={this.props.filterInfo}
          />
        </form>

      </div>

    );
  }
}
class FilterableContactTable extends React.Component {
  state = {
    matchFinal: []
  }

  filterInfo = (e) => {
    let filterMatch = e.target.value;
    // Tom
    console.log(filterMatch)
    let contacts = this.props.contacts;
    this.setState({ matchFinal: contacts.filter(element => element.name.toLowerCase() === filterMatch.toLowerCase()) })
  }

  render() {
    return (
      <div>
        <h1>Filterable React List</h1>
        <SearchBar contacts={CONTACTS}
          filterInfo={this.filterInfo} />
        <ContactTable
          contacts={this.state.matchFinal}
        />

      </div>
    );
  }
}
var CONTACTS = [
  { name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com' },
  { name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com' },
  { name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com' },
  { name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com' },
  { name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com' },
];

