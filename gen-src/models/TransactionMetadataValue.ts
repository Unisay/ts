/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p> 
 *
 * OpenAPI spec version: v2022-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ByteString } from './ByteString';
import { Int } from './Int';
import { List } from './List';
import { MapMap } from './MapMap';
import { ModelMap } from './ModelMap';
import { ModelString } from './ModelString';
import { HttpFile } from '../http/http';

export class TransactionMetadataValue {
    'string': string;
    '_int': number;
    'bytes': string;
    'list': Array<TransactionMetadataValue>;
    'map': Array<MapMap>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "string",
            "baseName": "string",
            "type": "string",
            "format": ""
        },
        {
            "name": "_int",
            "baseName": "int",
            "type": "number",
            "format": ""
        },
        {
            "name": "bytes",
            "baseName": "bytes",
            "type": "string",
            "format": ""
        },
        {
            "name": "list",
            "baseName": "list",
            "type": "Array<TransactionMetadataValue>",
            "format": ""
        },
        {
            "name": "map",
            "baseName": "map",
            "type": "Array<MapMap>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionMetadataValue.attributeTypeMap;
    }

    public constructor() {
    }
}

