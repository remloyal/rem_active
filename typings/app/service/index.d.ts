// This file is created by egg-ts-helper@1.34.6
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLable from '../../../app/service/Lable';
import ExportRecover from '../../../app/service/Recover';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    lable: AutoInstanceType<typeof ExportLable>;
    recover: AutoInstanceType<typeof ExportRecover>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
