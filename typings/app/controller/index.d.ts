// This file is created by egg-ts-helper@1.34.6
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportArticleSort from '../../../app/controller/articleSort';
import ExportHome from '../../../app/controller/home';
import ExportLabel from '../../../app/controller/label';
import ExportOpenAi from '../../../app/controller/openAi';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    articleSort: ExportArticleSort;
    home: ExportHome;
    label: ExportLabel;
    openAi: ExportOpenAi;
  }
}
