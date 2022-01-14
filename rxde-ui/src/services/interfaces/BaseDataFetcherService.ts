import { JCRProperty } from "../../types/JCRPropertyTypes";
import { IRead } from "./IRead";
import { IWrite } from "./IWrite";

export interface BaseDataFetcherService extends IWrite, IRead {
    create(basePath: string, name: string, props: JCRProperty[]): Promise<Boolean>;
    update(path: string, propes: JCRProperty[]): Promise<Boolean>;
    delete(path: string): Promise<Boolean>;
    readProp(path: string): Promise<JCRProperty>;
    readAllProps(path: string): Promise<JCRProperty[]>;
    readAllChildren(path: string): Promise<string[]>;
}