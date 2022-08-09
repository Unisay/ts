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

import { NoSuchPool } from './NoSuchPool';
import { NoSuchWallet } from './NoSuchWallet';
import { HttpFile } from '../http/http';

export class JoinStakePool404Response {
    /**
    * May occur when a given poolId does not match any known pool.
    */
    'message': string;
    'code': JoinStakePool404ResponseCodeEnum;

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
            "type": "JoinStakePool404ResponseCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JoinStakePool404Response.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JoinStakePool404ResponseCodeEnum = "no_such_pool" ;
