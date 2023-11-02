import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const inputStyle = {
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: '#f0f8ff'
    };

    const appStyle = {
      backgroundColor: '#d3d3d3',
      padding: '20px'
    };

    const buttonStyle = {
      marginRight: '10px',
      padding: '10px',
      backgroundColor: '#4682b4', // SteelBlue color for the buttons
      color: 'white', // Text color for the buttons
      border: 'none', // Remove border from the buttons
      cursor: 'pointer' // Change cursor to pointer when hovering over the buttons
    };

    return (
      <div className="App" style={appStyle}>
        <h1>New Product</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={inputStyle}>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
          </div>
          <div style={inputStyle}>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} />
          </div>
          <div style={inputStyle}>
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} />
          </div>
          <div style={inputStyle}>
            <input type="number" name="quantity" placeholder="Quantity" onChange={this.handleChange} />
          </div>
          <div style={inputStyle}>
            <input type="number" name="price" placeholder="Price" onChange={this.handleChange} />
          </div>
          <button type="submit" style={buttonStyle}>Submit</button>
          <button type="reset" style={buttonStyle}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default App;
