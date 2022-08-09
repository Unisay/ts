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

import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1Delegation } from './ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1Delegation';
import { ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1State } from './ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1State';
import { ListWallets200ResponseInnerAssets } from './ListWallets200ResponseInnerAssets';
import { ListWallets200ResponseInnerBalance } from './ListWallets200ResponseInnerBalance';
import { ListWallets200ResponseInnerPassphrase } from './ListWallets200ResponseInnerPassphrase';
import { ListWallets200ResponseInnerTip } from './ListWallets200ResponseInnerTip';
import { PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate } from './PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate';
import { HttpFile } from '../http/http';

export class ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1 {
    /**
    * A unique identifier for the wallet
    */
    'id': string;
    'name': string;
    /**
    * An individual segment within a derivation path.  The `H` suffix indicates a _Hardened_ child private key, which means that children of this key cannot be derived from the public key. Indices without a `H` suffix are called _Soft_. 
    */
    'accountIndex': string;
    /**
    * Number of consecutive unused addresses allowed.  **IMPORTANT DISCLAIMER:** Using values other than `20` automatically makes your wallet invalid with regards to BIP-44 address discovery. It means that you **will not** be able to fully restore your wallet in a different software which is strictly following BIP-44.  Beside, using large gaps is **not recommended** as it may induce important performance degradations. Use at your own risks.  **IMPORTANT DISCLAIMER 2:** There is no way to `import` addresses generated outside (e.g. using cardano-addresses) into the wallet. Wallet only discovers transactions on its used and unused addresses that are within its currently seen `address_pool_gap`. Transactions on addresses that \"belong\" to the wallet but happen to be beyond its `address_pool_gap` will not be visible to the wallet. This is a technical limitation of the industry standard [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki). See also [CIP-1852](https://github.com/cardano-foundation/CIPs/blob/master/CIP-1852/CIP-1852.md). 
    */
    'addressPoolGap': number;
    'passphrase'?: ListWallets200ResponseInnerPassphrase;
    'paymentScriptTemplate': PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate;
    'delegationScriptTemplate'?: PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate;
    'balance': ListWallets200ResponseInnerBalance;
    'assets': ListWallets200ResponseInnerAssets;
    'delegation': ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1Delegation;
    'state': ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1State;
    'tip': ListWallets200ResponseInnerTip;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "addressPoolGap",
            "baseName": "address_pool_gap",
            "type": "number",
            "format": ""
        },
        {
            "name": "passphrase",
            "baseName": "passphrase",
            "type": "ListWallets200ResponseInnerPassphrase",
            "format": ""
        },
        {
            "name": "paymentScriptTemplate",
            "baseName": "payment_script_template",
            "type": "PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate",
            "format": ""
        },
        {
            "name": "delegationScriptTemplate",
            "baseName": "delegation_script_template",
            "type": "PendingSharedWalletCollectingAccountPublicKeysForEachCoSigner1PaymentScriptTemplate",
            "format": ""
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "ListWallets200ResponseInnerBalance",
            "format": ""
        },
        {
            "name": "assets",
            "baseName": "assets",
            "type": "ListWallets200ResponseInnerAssets",
            "format": ""
        },
        {
            "name": "delegation",
            "baseName": "delegation",
            "type": "ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1Delegation",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1State",
            "format": ""
        },
        {
            "name": "tip",
            "baseName": "tip",
            "type": "ListWallets200ResponseInnerTip",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActiveSharedWalletAccountPublicKeysForEachCoSignersIsCollected1.attributeTypeMap;
    }

    public constructor() {
    }
}

