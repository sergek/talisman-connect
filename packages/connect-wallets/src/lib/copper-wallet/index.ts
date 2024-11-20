import { BaseDotsamaWallet } from '../base-dotsama-wallet'
import logo from './logo.svg'

export class CopperConnectWallet extends BaseDotsamaWallet {
  extensionName = 'copperconnect'
  title = 'Copper Connect'
  installUrl = 'https://chromewebstore.google.com/detail/copper-connect/pkklibkpnflbmahpcnpifnnooicnehnh'
  noExtensionMessage =
    'You can use any Polkadot compatible wallet but we recommend using Talisman'
  logo = {
    src: logo,
    alt: 'Copper Logo',
  }
}