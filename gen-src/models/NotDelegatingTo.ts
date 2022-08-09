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

export class NotDelegatingTo {
    /**
    * May occur when trying to quit a pool on an account that isn't delegating.
    */
    'message': string;
    'code': NotDelegatingToCodeEnum;

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
            "type": "NotDelegatingToCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotDelegatingTo.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NotDelegatingToCodeEnum = "not_delegating_to" ;

