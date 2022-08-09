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

import { ListWallets200ResponseInnerDelegationActive } from './ListWallets200ResponseInnerDelegationActive';
import { ListWallets200ResponseInnerDelegationNextInner } from './ListWallets200ResponseInnerDelegationNextInner';
import { HttpFile } from '../http/http';

/**
* Delegation settings
*/
export class ListWallets200ResponseInnerDelegation {
    'active': ListWallets200ResponseInnerDelegationActive;
    'next': Array<ListWallets200ResponseInnerDelegationNextInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "ListWallets200ResponseInnerDelegationActive",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "Array<ListWallets200ResponseInnerDelegationNextInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListWallets200ResponseInnerDelegation.attributeTypeMap;
    }

    public constructor() {
    }
}

