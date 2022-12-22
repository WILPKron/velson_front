import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class LinkScrollContext extends Component {
  state = {
    linkScroll: false,
  };

  setIsScrollByLink = () => {
    this.setState((prevState) => {
      return {
        linkScroll: prevState.linkScroll === false ? true : false,
      };
    });
  };

  render() {
    return (
      <Provider
        value={{
          linkScroll: this.state.linkScroll,
          setIsScrollByLink: this.setIsScrollByLink,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { LinkScrollContext, Consumer as LinkScrollConsumer };
