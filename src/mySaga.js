import {all, delay, put, takeLatest} from 'redux-saga/effects';
import { push } from 'connected-react-router';

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

export default function* mySagas() {
    yield all([
        takeLatest(`@@router/LOCATION_CHANGE`, redirect)
    ]);
}
