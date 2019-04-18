import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const { lists, allCards } = props.store;
    this.state = { lists, allCards };
  }

  buildList = () => {
    return this.state.lists.map(list => (
      <List
        key={list.id}
        header={list.header}
        cards={list.cardIds.map(id => this.state.allCards[id])}
        onDeleteItem={this.handleDeleteItem}
        onAddItem={this.handleAddItem}
      />
    ));
  };

  handleDeleteItem = (header, id) => {
    console.log('Delete Item', header, id);
    //list card from lists array
    //delete card from allcards array
  };

  handleAddItem = header => {
    console.log('Add Item', header);
    let newCard = this.newRandomCard();
    //create random object
    console.log(newCard);

    //add to allCards array.
  };

  newRandomCard = () => {
    const id =
      Math.random()
        .toString(36)
        .substring(2, 4) +
      Math.random()
        .toString(36)
        .substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum'
    };
  };

  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
        key === keyToOmit ? newObj : { ...newObj, [key]: value },
      {}
    );
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>{this.buildList()}</div>
      </main>
    );
  }
}

export default App;
