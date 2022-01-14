import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BasicAuthCredentials } from "../../types/BasicAuthCredentialsType";
import { JCRProperty } from "../../types/JCRPropertyTypes";
import { ChildNodesSchemaType } from "../../types/schemas/ChildNodesSchemaType";
import { BaseContentRepository } from "../interfaces/BaseContentRepository";

export class SimpleContentRepository extends BaseContentRepository {
    private _axiosInstance: AxiosInstance;
    constructor(creds: BasicAuthCredentials, devMode: Boolean) {
        super(creds, devMode);
        const axiosInstances = [
            axios.create({ baseURL: 'http://localhost:8080', timeout: 1000 }),
            axios.create({ baseURL: '', timeout: 1000 })
        ]
        this._axiosInstance = devMode ? axiosInstances[0] : axiosInstances[1];
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
    async readAllProps(path: string): Promise<JCRProperty[]> {
        const url: string = `${path}.json`;
        const response: AxiosResponse = await this._axiosInstance.get(url);
        return Object.keys(response.data).map((key, _idx, _arr) => new JCRProperty("String", response.data[key], key));
    }
    async readAllChildren(path: string): Promise<string[]> {
        const url: string = `${path}.harray.1.json`;
        const response: AxiosResponse = await this._axiosInstance.get(url);
        const children: ChildNodesSchemaType = response.data as ChildNodesSchemaType;
        return children.__children__.map((val, _idx, _arr) => val['__name__']);
    }

}