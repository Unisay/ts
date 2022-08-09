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

/**
* A delegation certificate belonging to wallet  Only for 'join_pool' the 'pool' property is required. 
*/
export class ConstructTransaction202ResponseCoinSelectionCertificatesInner {
    'certificateType': ConstructTransaction202ResponseCoinSelectionCertificatesInnerCertificateTypeEnum;
    /**
    * A unique identifier for the pool.
    */
    'pool'?: string;
    'rewardAccountPath': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certificateType",
            "baseName": "certificate_type",
            "type": "ConstructTransaction202ResponseCoinSelectionCertificatesInnerCertificateTypeEnum",
            "format": ""
        },
        {
            "name": "pool",
            "baseName": "pool",
            "type": "string",
            "format": "hex|bech32"
        },
        {
            "name": "rewardAccountPath",
            "baseName": "reward_account_path",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructTransaction202ResponseCoinSelectionCertificatesInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ConstructTransaction202ResponseCoinSelectionCertificatesInnerCertificateTypeEnum = "join_pool" | "quit_pool" | "register_reward_account" ;

