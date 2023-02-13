// This file is created by egg-ts-helper@1.34.6
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportOpenAi from '../../../app/controller/openAi';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    openAi: ExportOpenAi;
  }
}
