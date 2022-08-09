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

import { CreateSharedWalletFromMnemonics1PaymentScriptTemplate } from './CreateSharedWalletFromMnemonics1PaymentScriptTemplate';
import { HttpFile } from '../http/http';

export class CreateSharedWalletFromMnemonics1 {
    'name': string;
    /**
    * A list of mnemonic words
    */
    'mnemonicSentence': Array<string>;
    /**
    * An optional passphrase used to encrypt the mnemonic sentence.
    */
    'mnemonicSecondFactor'?: Array<string>;
    /**
    * A master passphrase to lock and protect the wallet for sensitive operation (e.g. sending funds)
    */
    'passphrase': string;
    /**
    * An individual segment within a derivation path.  The `H` suffix indicates a _Hardened_ child private key, which means that children of this key cannot be derived from the public key. Indices without a `H` suffix are called _Soft_. 
    */
    'accountIndex': string;
    'paymentScriptTemplate': CreateSharedWalletFromMnemonics1PaymentScriptTemplate;
    'delegationScriptTemplate'?: CreateSharedWalletFromMnemonics1PaymentScriptTemplate;
    /**
    * Script validation level. Required validation sifts off scripts that would not be accepted by the ledger. Recommended level filters out scripts that do not pass required validation and additionally when:   * 'all' is non-empty   * there are redundant timelocks in a given level   * there are no duplicated verification keys in a given level   * 'at_least' coefficient is positive   * 'all', 'any' are non-empty and `'at_least' has no less elements in the list      than the coefficient after timelocks are filtered out. 
    */
    'scriptValidation'?: CreateSharedWalletFromMnemonics1ScriptValidationEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "mnemonicSentence",
            "baseName": "mnemonic_sentence",
            "type": "Array<string>",
            "format": "bip-0039-mnemonic-word{english}"
        },
        {
            "name": "mnemonicSecondFactor",
            "baseName": "mnemonic_second_factor",
            "type": "Array<string>",
            "format": "bip-0039-mnemonic-word{english}"
        },
        {
            "name": "passphrase",
            "baseName": "passphrase",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentScriptTemplate",
            "baseName": "payment_script_template",
            "type": "CreateSharedWalletFromMnemonics1PaymentScriptTemplate",
            "format": ""
        },
        {
            "name": "delegationScriptTemplate",
            "baseName": "delegation_script_template",
            "type": "CreateSharedWalletFromMnemonics1PaymentScriptTemplate",
            "format": ""
        },
        {
            "name": "scriptValidation",
            "baseName": "script_validation",
            "type": "CreateSharedWalletFromMnemonics1ScriptValidationEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateSharedWalletFromMnemonics1.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CreateSharedWalletFromMnemonics1ScriptValidationEnum = "required" | "recommended" ;

