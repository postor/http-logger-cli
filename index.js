#!/usr/bin/env node

import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import cors from 'cors'

const bodyParser = require('body-parser');

const rawBodySaver =  (req, res, buf, encoding) =>{
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}

const options = {
  verify: rawBodySaver
};

app.use(bodyParser.json(options));

new App()
  .use(cors())
  .use(logger({
    timestamp:true,
    output:{
      color:true,
    }
  }))
  .use((req, res) => {
    console.log(`HEADERS:${JSON.stringify(req.headers)}`)
    console.log(`BODY:${JSON.stringify(req.body)}`)
    res.json({})
  })
  .listen(3000)