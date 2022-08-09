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

export class OutputTokenQuantityExceedsLimit {
    /**
    * Returned when a user-specified transaction output contains, for some asset, a token quantity that exceeds the limit supported by the protocol. 
    */
    'message': string;
    'code': OutputTokenQuantityExceedsLimitCodeEnum;

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
            "type": "OutputTokenQuantityExceedsLimitCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OutputTokenQuantityExceedsLimit.attributeTypeMap;
    }

    public constructor() {
    }
}


export type OutputTokenQuantityExceedsLimitCodeEnum = "output_token_quantity_exceeds_limit" ;

