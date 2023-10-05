/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error, 'RouteError');

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* @ts-ignore */}
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
