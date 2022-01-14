import { BasicAuthCredentials } from "../../types/BasicAuthCredentialsType";
import { JCRProperty } from "../../types/JCRPropertyTypes";
import { IRead } from "./IRead";
import { IWrite } from "./IWrite";

export abstract class BaseContentRepository implements IWrite, IRead {

    private _creds: BasicAuthCredentials;

    private _devMode: Boolean;

    constructor(creds: BasicAuthCredentials, devMode: Boolean) {
        this._creds = creds;
        this._devMode = devMode
    }
    create(basePath: string, name: string, props: JCRProperty[]): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    update(path: string, propes: JCRProperty[]): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    delete(path: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    readProp(path: string): Promise<JCRProperty> {
        throw new Error("Method not implemented.");
    }
    readAllProps(path: string): Promise<JCRProperty[]> {
        throw new Error("Method not implemented.");
    }
    readAllChildren(path: string): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
}