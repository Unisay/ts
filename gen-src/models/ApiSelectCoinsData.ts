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

import { Delegation } from './Delegation';
import { DelegationDelegationAction } from './DelegationDelegationAction';
import { NormalPayment1 } from './NormalPayment1';
import { PaymentPaymentsInner } from './PaymentPaymentsInner';
import { RewardRedemption1 } from './RewardRedemption1';
import { HttpFile } from '../http/http';

export class ApiSelectCoinsData {
    /**
    * A list of target outputs with amounts specified.
    */
    'payments': Array<PaymentPaymentsInner>;
    /**
    * When provided, attempts to withdraw rewards from the default stake address corresponding to the given mnemonic.  Should the rewards be null or too small to be worth withdrawing (i.e. the cost of adding them into the transaction is more than their own intrinsic value), the server will reject the request with a `withdrawal_not_worth` error.  withdrawal field    | reward balance | result ---                 | ---            | --- any recovery phrase | too small      | x Error 403 `withdrawal_not_worth` any recovery phrase | big enough     | ✓ withdrawal generated 
    */
    'withdrawal': Array<string>;
    /**
    * **⚠️ WARNING ⚠️**  _Please note that metadata provided in a transaction will be stored on the blockchain forever. Make sure not to include any sensitive data, in particular personally identifiable information (PII)._  Extra application data attached to the transaction.  Cardano allows users and developers to embed their own authenticated metadata when submitting transactions. Metadata can be expressed as a JSON object with some restrictions:  1. All top-level keys must be integers between `0` and `2^64 - 1`.  2. Each metadata value is tagged with its type.  3. Strings must be at most 64 bytes when UTF-8 encoded.  4. Bytestrings are hex-encoded, with a maximum length of 64 bytes.  Metadata aren't stored as JSON on the Cardano blockchain but are instead stored using a compact binary encoding (CBOR).  The binary encoding of metadata values supports three simple types:  * Integers in the range `-(2^64 - 1)` to `2^64 - 1` * Strings (UTF-8 encoded) * Bytestrings  And two compound types:  * Lists of metadata values * Mappings from metadata values to metadata values  It is possible to transform any JSON object into this schema.  However, if your application uses floating point values, they will need to be converted somehow, according to your requirements. Likewise for `null` or `bool` values. When reading metadata from chain, be aware that integers may exceed the javascript numeric range, and may need special \"bigint\" parsing. 
    */
    'metadata'?: any;
    'delegationAction': DelegationDelegationAction;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<PaymentPaymentsInner>",
            "format": ""
        },
        {
            "name": "withdrawal",
            "baseName": "withdrawal",
            "type": "Array<string>",
            "format": "bip-0039-mnemonic-word{english}"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "delegationAction",
            "baseName": "delegation_action",
            "type": "DelegationDelegationAction",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiSelectCoinsData.attributeTypeMap;
    }

    public constructor() {
    }
}

