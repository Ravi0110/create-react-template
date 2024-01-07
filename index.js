#!/usr/bin/env node

const { program } = require('commander');
const createReactTemplate = require('./createReactTemplate');

program
  .version('1.0.0')
  .description('Create a new React template in the current directory')
  .action(() => {
    createReactTemplate(process.cwd());
  });

program.parse(process.argv);
