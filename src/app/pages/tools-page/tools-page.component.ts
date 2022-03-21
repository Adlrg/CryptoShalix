import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { CoreService } from '../../shared/services/core.service';

import { IAccordion } from 'src/app/shared/models/core';
import { IAccordionItem, URLS } from '../../shared/models/core';
import { ECurrency } from '../../shared/models/currency';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  showExpanded = false;
  bitcoinText = ECurrency.BTC.text;
  toolsList: IAccordion[] = [];

  constructor(
    private coreService: CoreService,
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.prepareToolsList();
    if (this.accordion) { this.accordion.openAll(); }
  }

  private prepareToolsList(): void {
    this.toolsList = [];
    this.toolsList.push(this.prepareToolsAnalysisMarket());
    this.toolsList.push(this.prepareToolsAnalysisTechnical());
    this.toolsList.push(this.prepareToolsBitcoin());
    this.toolsList.push(this.prepareBitcoinWallets());
    this.toolsList.push(this.prepareToolsExchangeCEX());
    this.toolsList.push(this.prepareToolsExchangeDEX());
    this.toolsList.push(this.prepareToolsWallets());
    this.toolsList.push(this.prepareToolsOthers());
  }

  private prepareToolsAnalysisMarket(): IAccordion {
    const groupName = 'ANALYSIS_MARKET';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'CoinGecko', URLS.REF_CoinGecko, 4.5),
        this.createToolItem(groupName, 'CoinMarketCap', URLS.REF_CoinMarketCap, 4),
        this.createToolItem(groupName, 'CoinMarketCal', URLS.REF_CoinMarketCal, 4.5),
        this.createToolItem(groupName, 'Lunarcrush', URLS.REF_Lunarcrush, 3.5),
        this.createToolItem(groupName, 'DefiLlama', URLS.REF_DefiLlama, 3.5),
        this.createToolItem(groupName, 'Google Trends', URLS.REF_GoogleTrends, 1.5),
      ],
      'multiline_chart'
    );
    return accordion;
  }

  private prepareToolsAnalysisTechnical(): IAccordion {
    const groupName = 'ANALYSIS_TECH';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'TradingView', URLS.REF_TradingView, 4.5),
      ],
      'insert_chart_outlined'
    );
    return accordion;
  }

  private prepareToolsBitcoin(): IAccordion {
    const groupName = 'BITCOIN_TOOLS';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Bitcoin Rainbow Chart', URLS.REF_BitcoinRainbowChart, 5),
      ],
      'bitcoin'
    );
    return accordion;
  }

  private prepareBitcoinWallets(): IAccordion {
    const groupName = 'BITCOIN_WALLETS';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Blue Wallet', URLS.REF_BlueWallet, 4),
        this.createToolItem(groupName, 'Muun Wallet', URLS.REF_MuunWallet, 4),
        this.createToolItem(groupName, 'Samourai Wallet', URLS.REF_SamouraiWallet, 5),
        this.createToolItem(groupName, 'Sparrow Wallet', URLS.REF_SparrowWallet, 5),
        this.createToolItem(groupName, 'Wallet Of Satoshi', URLS.REF_WalletOfSatoshi, 4),
        this.createToolItem(groupName, 'Zap', URLS.REF_Zap, 3.5),
        this.createToolItem(groupName, 'Zebedee', URLS.REF_Zebedee, 3),
      ],
      'bitcoin'
    );
    return accordion;
  }

  private prepareToolsExchangeCEX(): IAccordion {
    const groupName = 'EXCHANGES_CEX';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Binance', URLS.REF_Binance, 5),
        this.createToolItem(groupName, 'Bit2Me', URLS.REF_Bit2Me, 3),
        this.createToolItem(groupName, 'Cryptocom', URLS.REF_CryptoCom, 3),
        this.createToolItem(groupName, 'FTX', URLS.REF_FTX, 4),
        this.createToolItem(groupName, 'KuCoin', URLS.REF_KuCoin, 4.5),
        this.createToolItem(groupName, 'Wirex', URLS.REF_Wirex, 4.5),
      ],
      'account_balance'
    );
    return accordion;
  }

  private prepareToolsExchangeDEX(): IAccordion {
    const groupName = 'EXCHANGES_DEX';
    const accordion = this.createToolsGroup(
      groupName,
      [
        // this.createToolItem(groupName, 'PooCoin', URLS.REF_BoggedFinance, 0),
        // this.createToolItem(groupName, 'PooCoin', URLS.REF_DexGuru, 0),
        // this.createToolItem(groupName, 'DexTools', URLS.REF_DexTools, 0),
        // this.createToolItem(groupName, 'PooCoin', URLS.REF_PooCoin, 0),
      ],
      'device_hub'
    );
    return accordion;
  }

  private prepareToolsWallets(): IAccordion {
    const groupName = 'WALLETS';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Brave Wallet', URLS.REF_BraveWallet, 4.2),
        this.createToolItem(groupName, 'Metamask', URLS.REF_Metamask, 3.8),
        this.createToolItem(groupName, 'Safepal', URLS.REF_Safepal, 4),
        this.createToolItem(groupName, 'TrustWallet', URLS.REF_TrustWallet, 3.5),
      ],
      'account_balance_wallet'
    );
    return accordion;
  }

  private prepareToolsOthers(): IAccordion {
    const groupName = 'OTHERS';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Chainlist', URLS.REF_Chainlist, 4.5),
      ],
      'important_devices'
    );
    return accordion;
  }

  private createToolsGroup(groupName: string, items: IAccordionItem[], icon?: string, disabled?: boolean): IAccordion {
    items = (this.coreService.sorter(items, '-rank'));
    return {
      title: `PAGES.TOOLS.GROUPS.${groupName}.title`,
      description: `PAGES.TOOLS.GROUPS.${groupName}.description`,
      disabled,
      icon,
      items
    };
  }

  private createToolItem(groupName: string, name: string, link: string, rank: number): IAccordionItem {
    return {
      text: name,
      link,
      description: `PAGES.TOOLS.GROUPS.${groupName}.app${name.replace(/\s/g, '')}`,
      image: '',
      rank
    };
  }

  isNullOrEmpty(val: string): boolean {
    val = this.translateService.instant(val);
    return this.coreService.isNullOrEmpty(val.trim());
  }

  /**
   *
    Apps de MercatorCrypto
    - BoggedFinance: bogged.finance. Herramientas automatizadas para trading en la BSC. Puedes poner órdenes de compra y venta. No es la más útil ya que se desbloquean ciertas funciones si holdeas su token.
    - DexGuru: dex.guru. Herramienta muy completa para ver el gráfico, liquidez, listado comercial, etc.
    - DexTools: dextools.io/app. Herramienta de trading con muchos datos. Muy buena.
    - PooCoin: poocoin.app. Comprar, vender, ver gráficas, liquidez, etc

    - StaySafu: app.staysafu.org. Análisis automático del token desde scan token. Muy util para tener un primer resumen.
    - BSCheck: bscheck.eu. Estupenda herramienta para análisis automático de tokens.
    - Justbuitffs: apps.justbuitffs.com. Otor escáner de tokens.
    - MoonArch: moonarch.app. Algunos datos sobre los tokens aunque bastante incompleta, pero muy visual.
    - Honeypot: honeypot.is. Estupenda herramienta para detectar si estamos ante un tarro de miel, token en el que puedes comprar, pero no vender.
    - RugPullDetector: rugpulldetector.com. Estupenda herramienta para detectar si en el contrato está activada esa opción. Un poco coñazo porque hay que copiar el contrato del token. Pero se puede hacer desde Coingecko o Coinmarketcap sin problemas.
    - RugDoc: rugdoc.io. Herramienta similar a las anteriores, aunque tiene muchos tokens de otras redes distintas de la BSC.
    - Mudra: mudra.website. Herramienta en que se puede ver la liquidez bloqueada de muchos tokens. Especialmente interesante porque se ven los últimos tokens que la han bloqueado aquí.
    - StackerNews: stacker.news. Permite publicar posts y que te remuneren en BTC LN, a la par que tu debes también valorar al resto con tus satoshis. Haces un ingreso de 1000 satoshis, y por cada publicación que te guste, donas unos pocos sats, pero si publicas posts, y la gente da like, recuperas esos sats. Mercado cíclico.
    - KYCP: kycp.org. Para saber si tu Bitcoin son tan privados como esperas. Nivel avanzado. Muy útil para ver cómo han implementado los diferentes wallets la privacidad (Wasabi, JoinMarket, Whirlpool, etc).
   *
   */
}
