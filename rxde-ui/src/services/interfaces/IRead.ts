import { JCRProperty } from "../../types/JCRPropertyTypes"

export interface IRead{
    readProp(path: string): Promise<JCRProperty>;
    readAllProps(path: string): Promise<JCRProperty[]>;
    readAllChildren(path: string): Promise<string[]>;
}