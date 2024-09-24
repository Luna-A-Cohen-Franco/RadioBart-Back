import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import server from './server';
import EnvVars from '@src/consts/EnvVars';


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' + 
  EnvVars.Port.toString());

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
