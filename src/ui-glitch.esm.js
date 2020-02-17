const css = String.raw;

const styles = css`
  .ui-glitch--squish-screen {
    transform: scaleY(0.98) translateY(-1vh);
  }

  .ui-glitch--saturate-screen {
    transform: saturate(1.5);
  }

  .ui-glitch--skew-screen {
    transform: skewx(0.25deg);
    overflow-x: hidden;
  }

  .ui-glitch--blur-screen {
    filter: blur(0.5px);
  }

  .ui-glitch--dust-speck {
    --ui-glitch--dust-speck--color: hsla(0, 50%, 50%, 0.5);
    pointer-events: none;
    padding: 0;
    border: 0;
    margin: 0;
    width: 1px;
    height: 1px;
    background: var(--ui-glitch--dust-speck--color);
    box-shadow: 0 0 1px 0 var(--ui-glitch--dust-speck--color);
    position: fixed;
  }
`;

const stylesheet = document.createElement("style");
stylesheet.id = "ui-glitch";
stylesheet.dataset.homepage = "https://github.com/wavebeem/ui-glitch";
stylesheet.textContent = styles;
document.head.insertBefore(stylesheet, document.head.firstChild);

function rando() {
  return Math.floor(Math.random() * 60 + 20);
}

export function addDustSpeck() {
  const speck = document.createElement("div");
  speck.className = "ui-glitch--dust-speck";
  speck.dataset.isThatDust = "no";
  speck.style.top = rando() + "vh";
  speck.style.left = rando() + "vw";
  document.body.appendChild(speck);
}

export function blurScreen() {
  document.body.classList.add("ui-glitch--blur-screen");
}

export function skewScreen() {
  document.body.classList.add("ui-glitch--skew-screen");
}

export function saturateScreen() {
  document.body.classList.add("ui-glitch--saturate-screen");
}

export function squishScreen() {
  document.body.classList.add("ui-glitch--squish-screen");
}
