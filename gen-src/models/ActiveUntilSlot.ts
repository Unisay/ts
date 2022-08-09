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

export class ActiveUntilSlot {
    /**
    * Transaction is only valid before the specified slot number (`< active_until`).
    */
    'activeUntil': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "activeUntil",
            "baseName": "active_until",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActiveUntilSlot.attributeTypeMap;
    }

    public constructor() {
    }
}

