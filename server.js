const inquirer = require("inquirer");
const fs = require("fs");
const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());