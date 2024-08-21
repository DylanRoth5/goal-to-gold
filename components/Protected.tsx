'use client';

import { useCookies } from 'next-client-cookies';

export const MytokenValue = () => {
  const cookies = useCookies();

  return (
    <div>
      <p>{cookies.get('MyToken')}</p>

      {/* <button onClick={() => cookies.set('my-cookie', 'my-value')}>
        Set cookie
      </button>
      {' | '}
      <button onClick={() => cookies.delete('my-cookie')}>Delete cookie</button> */}
    </div>
  );
};