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

import { ActiveFromSlot } from './ActiveFromSlot';
import { ActiveUntilSlot } from './ActiveUntilSlot';
import { All } from './All';
import { Any } from './Any';
import { ScriptTemplateValue } from './ScriptTemplateValue';
import { Some } from './Some';
import { SomeSome } from './SomeSome';
import { HttpFile } from '../http/http';

export class ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate {
    /**
    * Script primitive for which all signing keys corresponding to all list cosigners' verification keys are expected to make the script valid.
    */
    'all': Array<ScriptTemplateValue>;
    /**
    * Script primitive for which a signing key corresponding to any of the list cosigners' verification keys is expected to make the script valid. It is equivalent to `some` with `\"at_least\"=1`.
    */
    'any': Array<ScriptTemplateValue>;
    'some': SomeSome;
    /**
    * Transaction is only valid starting at the specified slot number (`≥ active_from`).
    */
    'activeFrom': number;
    /**
    * Transaction is only valid before the specified slot number (`< active_until`).
    */
    'activeUntil': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "all",
            "baseName": "all",
            "type": "Array<ScriptTemplateValue>",
            "format": ""
        },
        {
            "name": "any",
            "baseName": "any",
            "type": "Array<ScriptTemplateValue>",
            "format": ""
        },
        {
            "name": "some",
            "baseName": "some",
            "type": "SomeSome",
            "format": ""
        },
        {
            "name": "activeFrom",
            "baseName": "active_from",
            "type": "number",
            "format": ""
        },
        {
            "name": "activeUntil",
            "baseName": "active_until",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructTransactionRequestMintBurnInnerPolicyScriptTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}
