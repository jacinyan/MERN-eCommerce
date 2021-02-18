import React from 'react'
import ReactDOM from 'react-dom'
import Router from "Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'index.scss'

import 'services/auth'

ReactDOM.render(
    <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Router />
    </>,
    document.getElementById('root')
)
