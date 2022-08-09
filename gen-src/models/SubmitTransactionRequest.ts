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
* The result of signing a transaction (serialized and encoded). 
*/
export class SubmitTransactionRequest {
    /**
    * The CBOR-encoded transaction, represented in either hex or base64 encoding. This always includes the transaction body and the witness set, even if the latter is empty. 
    */
    'transaction': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "string",
            "format": "base64|base16"
        }    ];

    static getAttributeTypeMap() {
        return SubmitTransactionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

