/*
 * Image Block
 * Show an image referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

export default async function decorate(block) {
    const a = block.querySelector('a');
    if (a) {
      const source = a.href;
      block.innerHTML = `
      <picture>
        <img loading="lazy" src="${source}">
      </picture>
      `;
    }
  }