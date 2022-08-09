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
* Settings
*/
export class PutSettingsRequestSettings {
    /**
    * Select stake pool metadata fetching strategy:   - `none` - metadata is not fetched at all,   - `direct` - metadata is fetched directly URLs registered on chain,   - `uri` - metadata is fetched from an external Stake-Pool Metadata Aggregation Server (SMASH)  After update existing metadata will be dropped forcing it to re-sync automatically with the new setting. 
    */
    'poolMetadataSource': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "poolMetadataSource",
            "baseName": "pool_metadata_source",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PutSettingsRequestSettings.attributeTypeMap;
    }

    public constructor() {
    }
}

