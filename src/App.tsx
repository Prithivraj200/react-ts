import { FC, Fragment } from 'react';

import './app.scss';

const app: FC = () => {
  const arr = [1, 2, 3];
  return (
    <Fragment>
      <div>First app</div>
      <div className="list" data-testid="list">
        {arr.map((a) => (
          <div className="item" key={a}>
            {a}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default app;
