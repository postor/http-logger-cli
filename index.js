#!/usr/bin/env node

import express from 'express'
import cors from 'cors'

import bodyParser from 'body-parser'
import chalk from 'chalk'

const { PORT = "3000", MOCK = process.cwd() } = process.env

const rawBodySaver = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8')
  }
}

const options = {
  verify: rawBodySaver
};


let app = express()
app.use(cors())
app.use(bodyParser.json(options))
app.use((req, res, next) => {
  console.log(`${chalk.underline(new Date().toLocaleString(undefined, Intl.DateTimeFormat().resolvedOptions().timeZone))} ${chalk.red(req.method)} ${chalk.underline(req.url)}
${chalk.blue(`HEADER`)}: ${JSON.stringify(req.headers)}
${chalk.blue(`BODY`)}: ${req.rawBody}`)
  req.method = 'GET'
  next()
})
app.use(express.static(MOCK, {
  extensions: ['html', 'htm', 'json', 'txt']
}))
app.use((req, res) => res.json({}))
app.listen(PORT, () => console.log(`server started on port ${PORT}!`))