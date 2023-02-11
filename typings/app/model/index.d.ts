// This file is created by egg-ts-helper@1.34.6
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    User: ReturnType<typeof ExportUser>;
  }
}
