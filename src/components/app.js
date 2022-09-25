import { useState } from "react";
import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash/pickBy';
import StateApi from '../state-api/lib/index'
import ArticleList from './ArticleList';


class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}


// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       This is a sample stateful and server-side
//       rendered React application.
//       <br />
//       <br />
//       Here is a button that will track
//       how many times you click it:
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// }

export default App;