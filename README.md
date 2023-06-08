# 🤖civitai_prompt_scraper

Thi is an userscript to download images and metadata as a zip file.

This works for ViolentMokey in both Chrome and Firefox.

  <br/>

### **[Click here to install](https://github.com/craftgear/civitai_prompt_scraper/raw/main/dist/prompt_scraper.user.js)**.

  <br/>
  <br/>

Download button on a model page to dowlonad preview images, preview images' metadata and model metadata.

![download model previews](./_screenshots/model.jpeg)

Download button on a gallery page to download images and images' metadata.

![download gallery images](./_screenshots/gallery.jpeg)

Config panel.

![config](./_screenshots/config_panel.jpeg)

Access config panel from Violentmonkey.

![open config via ViolentMokey](./_screenshots/config_menu.jpeg)

## ⚠️Caveats

- You need to wait for a few seconds to see a button.
- It is slow as it downloads files one by one.
- A tab downloading in progress should remain open, or downloading fails.
- It prioritizes downloading avif/webp.

## 🌟Special Thanks

This userscript is inspired by [tehrobber/civitai-one-click-dl](https://github.com/tehrobber/civitai-one-click-dl).
