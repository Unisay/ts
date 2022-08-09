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

import { HttpFile } from '../http/http';

export class AssetNameTooLong {
    /**
    * Occurs when an asset name exceeds 32 bytes in length.
    */
    'message': string;
    'code': AssetNameTooLongCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "AssetNameTooLongCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssetNameTooLong.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AssetNameTooLongCodeEnum = "asset_name_too_long" ;

