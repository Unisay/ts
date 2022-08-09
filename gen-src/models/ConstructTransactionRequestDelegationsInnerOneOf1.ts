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

import { ConstructTransactionRequestDelegationsInnerOneOf1Quit } from './ConstructTransactionRequestDelegationsInnerOneOf1Quit';
import { HttpFile } from '../http/http';

export class ConstructTransactionRequestDelegationsInnerOneOf1 {
    'quit': ConstructTransactionRequestDelegationsInnerOneOf1Quit;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "quit",
            "baseName": "quit",
            "type": "ConstructTransactionRequestDelegationsInnerOneOf1Quit",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructTransactionRequestDelegationsInnerOneOf1.attributeTypeMap;
    }

    public constructor() {
    }
}

