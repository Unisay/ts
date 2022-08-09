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

import { GetUTxOsStatistics200ResponseTotal } from './GetUTxOsStatistics200ResponseTotal';
import { HttpFile } from '../http/http';

/**
* The absence of a stake key. The `stake` field shows how much of the wallet funds are not associated with an identifiable stake key.  Most likely, these funds are associated with enterprise addresses lacking staking rights. But they /could/ also be associate with more rare types of addresses like pointer addresses. 
*/
export class ListStakeKeys200ResponseNone {
    'stake': GetUTxOsStatistics200ResponseTotal;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stake",
            "baseName": "stake",
            "type": "GetUTxOsStatistics200ResponseTotal",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListStakeKeys200ResponseNone.attributeTypeMap;
    }

    public constructor() {
    }
}

