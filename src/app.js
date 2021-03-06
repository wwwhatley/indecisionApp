class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Thing 1", "Thing 2", "Thing 3", "Thing 4"]
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

class Action extends React.Component {
  constructor(props) {
    super(props);
  }
  handlePick(e) {
    e.preventDefault;
    alert("hi");
  }
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions ? true : false}
          onClick={this.handlePick}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {}), (this.handleRemoveAll = this.handleRemoveAll.bind(this));
  }
  handleRemoveAll(e) {
    e.preventDefault();
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button type="submit" onClick={this.props.handleDeleteOptions}>
          Remove All
        </button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const value = e.target.elements.option.value.trim();
    value && alert(value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
