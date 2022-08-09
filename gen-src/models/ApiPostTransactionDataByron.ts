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

import { PaymentPaymentsInner } from './PaymentPaymentsInner';
import { HttpFile } from '../http/http';

export class ApiPostTransactionDataByron {
    /**
    * A list of target outputs with amounts specified.
    */
    'payments': Array<PaymentPaymentsInner>;
    /**
    * The wallet's master passphrase.
    */
    'passphrase': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<PaymentPaymentsInner>",
            "format": ""
        },
        {
            "name": "passphrase",
            "baseName": "passphrase",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiPostTransactionDataByron.attributeTypeMap;
    }

    public constructor() {
    }
}

