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

import { ScriptTemplateValue } from './ScriptTemplateValue';
import { HttpFile } from '../http/http';

/**
* Script primitive for which at least a given number of signing keys corresponding to the list cosigners' verification keys are expected to make the script valid.
*/
export class SomeSome {
    'atLeast': number;
    '_from': Array<ScriptTemplateValue>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "atLeast",
            "baseName": "at_least",
            "type": "number",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "Array<ScriptTemplateValue>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SomeSome.attributeTypeMap;
    }

    public constructor() {
    }
}
