import React from "react";
import ReactDOM from "react-dom";
import { FormContainer } from '../src/index';

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
// ReactDOM.render(<FormContainer />, 'body');