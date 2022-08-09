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

export class BalanceTxMaxSizeLimitExceeded {
    /**
    * I was not able to balance the transaction without exceeding the maximum transaction size. 
    */
    'message': string;
    'code': BalanceTxMaxSizeLimitExceededCodeEnum;

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
            "type": "BalanceTxMaxSizeLimitExceededCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BalanceTxMaxSizeLimitExceeded.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BalanceTxMaxSizeLimitExceededCodeEnum = "balance_tx_max_size_limit_exceeded" ;

