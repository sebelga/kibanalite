import React, { useState } from "react";

import { EuiTitle, EuiButton, EuiSpacer } from '@elastic/eui'

import './app.scss';

const CompTwo = ({ counter }: { counter: number }) => {
  return (
    <div>Counter: <strong>{counter}</strong></div>
  )
};

const CompOne = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <CompTwo counter={counter} />
      <EuiSpacer size="s" />
      <EuiButton color="primary" onClick={() => setCounter((prev) => ++prev)}>Increment</EuiButton>
    </>
  )
}

export const App = () => {
  return (
    <>
    <EuiTitle size="l">
      <h1>KibanaLite</h1>
    </EuiTitle>
    <EuiSpacer />
    <CompOne />
    </>
  );
};
