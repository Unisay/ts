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

import { Icarus } from './Icarus';
import { IcarusTrezorLedgerFromXpub } from './IcarusTrezorLedgerFromXpub';
import { Ledger } from './Ledger';
import { Random } from './Random';
import { RandomFromXprv } from './RandomFromXprv';
import { Trezor } from './Trezor';
import { HttpFile } from '../http/http';

export class SomeByronWalletPostData {
    'style'?: SomeByronWalletPostDataStyleEnum;
    'name': string;
    /**
    * A master passphrase to lock and protect the wallet for sensitive operation (e.g. sending funds)
    */
    'passphrase': string;
    /**
    * A list of mnemonic words
    */
    'mnemonicSentence': Array<string>;
    /**
    * An extended account public key (public key + chain code)
    */
    'accountPublicKey': string;
    /**
    * Number of consecutive unused addresses allowed.  **IMPORTANT DISCLAIMER:** Using values other than `20` automatically makes your wallet invalid with regards to BIP-44 address discovery. It means that you **will not** be able to fully restore your wallet in a different software which is strictly following BIP-44.  Beside, using large gaps is **not recommended** as it may induce important performance degradations. Use at your own risks.  **IMPORTANT DISCLAIMER 2:** There is no way to `import` addresses generated outside (e.g. using cardano-addresses) into the wallet. Wallet only discovers transactions on its used and unused addresses that are within its currently seen `address_pool_gap`. Transactions on addresses that \"belong\" to the wallet but happen to be beyond its `address_pool_gap` will not be visible to the wallet. This is a technical limitation of the industry standard [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki). See also [CIP-1852](https://github.com/cardano-foundation/CIPs/blob/master/CIP-1852/CIP-1852.md). 
    */
    'addressPoolGap'?: number;
    /**
    * A root private key, encrypted using a given passphrase. The underlying key should contain: - A private key - A chain code - A public key 
    */
    'encryptedRootPrivateKey': string;
    /**
    * A hash of master passphrase. The hash should be an output of a Scrypt function with the following parameters: - logN = 14 - r = 8 - p = 1 
    */
    'passphraseHash': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "style",
            "baseName": "style",
            "type": "SomeByronWalletPostDataStyleEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "passphrase",
            "baseName": "passphrase",
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
            "name": "accountPublicKey",
            "baseName": "account_public_key",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "addressPoolGap",
            "baseName": "address_pool_gap",
            "type": "number",
            "format": ""
        },
        {
            "name": "encryptedRootPrivateKey",
            "baseName": "encrypted_root_private_key",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "passphraseHash",
            "baseName": "passphrase_hash",
            "type": "string",
            "format": "hex"
        }    ];

    static getAttributeTypeMap() {
        return SomeByronWalletPostData.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SomeByronWalletPostDataStyleEnum = "random" ;

