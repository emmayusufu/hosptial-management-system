/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { getItem, removeItem } from '@app/utilities/localStorageControl';
import PropTypes from 'prop-types';
import * as localStorageControl from '@app/utilities/localStorageControl';
import SessionExpiredDialog from '@app/layouts/admin-layout/components/dialogs/session-expired-dialog/SessionExpiredDialog';

class SessionTimeOut extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.children = props.children;
        this.state = {
            startSessionLockDialog: false,
        };
    }

    componentDidMount() {
        this.events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

        this.events.forEach((element) => {
            window.addEventListener(element, this.resetTimeout);
        });

        if (getItem('user').accessToken) {
            this.setTimeout();
        }

        window.addEventListener('storage', () => {
            const screenLock = localStorageControl.getItem('screenLock');
            this.setState({ startSessionLockDialog: screenLock });
        });
    }

    logoutTimerInterval = (stopInterval = false) => {
        const currentObj = this;
        const startInterval = setInterval(() => {
            currentObj.takeMeOut();
        }, 1000 * 60 * 6);
        if (stopInterval) {
            clearInterval(startInterval);
            clearTimeout(startInterval);
        }
    };

    warningTimer = () => {
        this.logoutTimerInterval();
    };

    onClose = () => {
        this.resetTimeout();
        clearInterval(this.logoutTimerInterval);
    };

    resetTimeout = () => {
        this.clearTimeoutFn();
        this.setTimeout();
    };

    clearTimeoutFn = () => {
        if (this.warnTimeout) clearTimeout(this.warnTimeout);
        if (this.logoutTimerInterval) clearTimeout(this.logoutTimerInterval);
        this.logoutTimerInterval(true);
    };

    setTimeout = () => {
        this.warnTimeout = setTimeout(this.warn, 1000 * 60 * 8);
    };

    takeMeOut = () => {
        // console.log('Sign out');
        removeItem('user');
        window.location.href = '/';
    };

    warn = () => {
        this.setState({ startSessionLockDialog: true });
        localStorageControl.setItem('screenLock', true);
        this.warningTimer();
        // console.log('Load Lockscreen');
    };

    closeDialog = () => {
        this.setState({ startSessionLockDialog: false });
        localStorageControl.removeItem('screenLock');
        this.resetTimeout();
        this.logoutTimerInterval(true);
    };

    render() {
        const { children } = this.props;
        const { startSessionLockDialog } = this.state;

        return <>
            {(startSessionLockDialog || localStorageControl.getItem('screenLock')) && <SessionExpiredDialog open={startSessionLockDialog || localStorageControl.getItem('screenLock')} onClose={() => this.closeDialog()} logOutHandler={() => this.takeMeOut()} />}
            {children}
        </>;
    }
}
SessionTimeOut.propTypes = {
    children: PropTypes.element.isRequired,
};

export default SessionTimeOut;
