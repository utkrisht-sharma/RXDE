export type JCRPropertyType = "String" | "Boolean" | "Long";

export class JCRNode {
    _name: string;
    _path: string;
    _properties: JCRProperty[];

    constructor(name: string, path: string, properties: JCRProperty[]) {
        this._name = name;
        this._path = path;
        this._properties = properties;
    }

    get name() {
        return this._name;
    }

    get path() {
        return this._path;
    }
    get properties() {
        return this._properties;
    }
};

export class JCRProperty {
    _propType: JCRPropertyType;
    _value: string;
    _name: string;

    constructor(propType: JCRPropertyType, value: string, name: string) {
        this._name = name;
        this._propType = propType;
        this._value = value;
    }

    get propType(): JCRPropertyType {
        return this._propType;
    }

    get value(): string {
        return this._value;
    }

    get name(): string {
        return this._name;
    }
};