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
* An amount of Ada spent or received, from the perspective of the wallet.  That is, for outgoing transaction, it represents the amount of Ada consumed as inputs, minus the amount of Ada spent as fees, as deposits or to addresses which do not belong to the wallet.  For incoming transaction, it represents the total amount of Ada received to addresses that belong to the wallet. 
*/
export class ListTransactions200ResponseInnerAmount {
    'quantity': number;
    'unit': ListTransactions200ResponseInnerAmountUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "ListTransactions200ResponseInnerAmountUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListTransactions200ResponseInnerAmount.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ListTransactions200ResponseInnerAmountUnitEnum = "lovelace" ;

