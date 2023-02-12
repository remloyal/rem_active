// This file is created by egg-ts-helper@1.34.6
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportArticleSort from '../../../app/model/article_sort';
import ExportLables from '../../../app/model/lables';
import ExportSort from '../../../app/model/sort';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    ArticleSort: ReturnType<typeof ExportArticleSort>;
    Lables: ReturnType<typeof ExportLables>;
    Sort: ReturnType<typeof ExportSort>;
    User: ReturnType<typeof ExportUser>;
  }
}
