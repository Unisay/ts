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
* The status of the SMASH server. Possible values are:  health                  | description ---                     | --- `\"available\"`           | server is awaiting your requests `\"unavailable\"`         | server is running, but currently unavailable, try again in a short time `\"unreachable\"`         | server could not be reached or didn't return a health status `\"no_smash_configured\"` | SMASH is currently not configured, adjust the Settings first 
*/
export class ApiHealthCheck {
    'health': ApiHealthCheckHealthEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "health",
            "baseName": "health",
            "type": "ApiHealthCheckHealthEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiHealthCheck.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiHealthCheckHealthEnum = "available" | "unavailable" | "unreachable" | "no_smash_configured" ;

