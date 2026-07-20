import React from 'react';

export const SuccessToast = ({ text, closeToast }) => {
    return (
        <div className="d-flex justify-content-start align-items-center" >
            <div style={{ 'fontSize': '25px' }}>
                <i className="fas fa-check"></i>
            </div>
            <div className="ml-3">
                <div>{text}</div>
            </div>
        </div>
    )
};

export const ErrorToast = ({ text, closeToast }) => {
    return (
        <div className="d-flex justify-content-start align-items-center">
            <div style={{ 'fontSize': '25px' }}>
                <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="ml-3">
                <div className="font-weight-bold">Error!</div>
                <div>{text}</div>
            </div>
        </div>
    )
};

export const InfoToast = ({ text, closeToast }) => {
    return (
        <div className="d-flex justify-content-start align-items-center">
            <div style={{ 'fontSize': '25px' }}>
                <i className="fas fa-info-circle"></i>
            </div>
            <div className="ml-3">
                <div>{text}</div>
            </div>
        </div>
    )
};

const ToastComponent = {
    SuccessToast,
    ErrorToast,
    InfoToast,
    successToast: SuccessToast,
    errorToast: ErrorToast,
    infoToast: InfoToast
};

export default ToastComponent;




