This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to show a redirect bug using the `connect-react-router` and `redux-saga`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Bug details

The file `src/mySaga.js` handles the LOCATION_CHANGE event and redirects to another page, but this only works if we delay the `push`

```javascript
function* redirect({ payload }) {
    const pathname = payload && payload.location.pathname;
    if (pathname === '/linkedPage') {
        // setTimeout 500ms.
        // comment the following line to experience the bug.
        yield delay(500);
        // dispatch push action
        yield put(push('/redirectPage'));
    }
}
``` 
