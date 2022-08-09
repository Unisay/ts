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

export class ConstructTransactionRequestDelegationsInnerOneOf1Quit {
    /**
    * An individual segment within a derivation path.  The `H` suffix indicates a _Hardened_ child private key, which means that children of this key cannot be derived from the public key. Indices without a `H` suffix are called _Soft_. 
    */
    'stakeKeyIndex': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stakeKeyIndex",
            "baseName": "stake_key_index",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructTransactionRequestDelegationsInnerOneOf1Quit.attributeTypeMap;
    }

    public constructor() {
    }
}

