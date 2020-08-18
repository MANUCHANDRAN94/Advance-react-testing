import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxPromise from "redux-promise";

// instead of taking props we destruicture it and we put a default initial state if not mentioned
//we did this becoz to check if the list print one comment for that we need some initial comments
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return (
    <Provider store={store}>
      {children}
      {/* we destructure props.children to children */}
    </Provider>
  );
};
