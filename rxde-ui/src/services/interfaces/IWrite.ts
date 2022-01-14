import { JCRProperty, JCRPropertyType } from "../../types/JCRPropertyTypes";

export interface IWrite{
    create(basePath: string, name: string, props: JCRProperty[]): Promise<Boolean>;
    update(path: string, propes: JCRProperty[]): Promise<Boolean>;
    delete(path: string): Promise<Boolean>;
};