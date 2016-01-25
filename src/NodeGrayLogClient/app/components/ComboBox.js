window.ComboBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },
  handleChange: function() {
    console.log("changed");
  },
  render: function() {
      
    var options = [];
    for (var i = 0; i < this.state.data.length; i++) {
        options.push(<option value={this.state.data[i].value}>{this.state.data[i].label}</option>);
    }
    
    return (
      <select onChange={this.handleChange} className="form-control">
        {options}
      </select>
    );
  }
});