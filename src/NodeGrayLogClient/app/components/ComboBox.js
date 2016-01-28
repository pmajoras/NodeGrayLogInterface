window.ComboBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },
  componentDidMount: function () {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        data: result,
      });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.serverRequest.abort();
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
      <select onChange={this.handleChange} className={this.props.class || 'form-control'}>
        {options}
      </select>
    );
  }
});