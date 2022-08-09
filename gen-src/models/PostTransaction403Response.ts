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

import { AlreadyWithdrawing } from './AlreadyWithdrawing';
import { CannotCoverFee } from './CannotCoverFee';
import { InsufficientCollateral } from './InsufficientCollateral';
import { InvalidWalletType } from './InvalidWalletType';
import { NoRootKey } from './NoRootKey';
import { NotEnoughMoney } from './NotEnoughMoney';
import { TransactionIsTooBig } from './TransactionIsTooBig';
import { UtxoTooSmall } from './UtxoTooSmall';
import { WrongEncryptionPassphrase } from './WrongEncryptionPassphrase';
import { HttpFile } from '../http/http';

export class PostTransaction403Response {
    /**
    * May occur when the given spending passphrase is wrong.
    */
    'message': string;
    'code': PostTransaction403ResponseCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "PostTransaction403ResponseCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PostTransaction403Response.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PostTransaction403ResponseCodeEnum = "wrong_encryption_passphrase" ;
