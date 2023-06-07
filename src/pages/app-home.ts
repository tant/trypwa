import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Xin chào!';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'App pwa của Tân',
        text: 'Đây là cái text',
        url: 'https://carp.vn',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Tortor posuere ac ut consequat semper viverra nam libero justo. Elit pellentesque habitant morbi tristique. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Eu turpis egestas pretium aenean. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Nam aliquam sem et tortor consequat. Turpis egestas sed tempus urna et pharetra pharetra. Netus et malesuada fames ac. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Nec ultrices dui sapien eget mi. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. At consectetur lorem donec massa. Semper eget duis at tellus at urna. Enim tortor at auctor urna. Volutpat blandit aliquam etiam erat velit scelerisque in. Justo laoreet sit amet cursus sit amet dictum sit. Viverra aliquet eget sit amet tellus.
            </p>


            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`
              : null}
          </sl-card>

          <sl-button href="${(import.meta as any).env.BASE_URL}about" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `;
  }
}
