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
import { ListWallets200ResponseInnerAssetsAvailableInner } from './ListWallets200ResponseInnerAssetsAvailableInner';
import { HttpFile } from '../http/http';

/**
* The total balance of assets that **can** be migrated. 
*/
export class CreateShelleyWalletMigrationPlan202ResponseBalanceSelected {
    'ada': GetUTxOsStatistics200ResponseTotal;
    /**
    * A flat list of assets (possibly empty).
    */
    'assets': Array<ListWallets200ResponseInnerAssetsAvailableInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ada",
            "baseName": "ada",
            "type": "GetUTxOsStatistics200ResponseTotal",
            "format": ""
        },
        {
            "name": "assets",
            "baseName": "assets",
            "type": "Array<ListWallets200ResponseInnerAssetsAvailableInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateShelleyWalletMigrationPlan202ResponseBalanceSelected.attributeTypeMap;
    }

    public constructor() {
    }
}

