# Live Lens for Visual Studio Code

[![VS Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/birukbelihu.live-lens?style=flat-square&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=birukbelihu.live-lens)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/birukbelihu.live-lens?style=flat-square&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=birukbelihu.live-lens)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/birukbelihu.live-lens?style=flat-square&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=birukbelihu.live-lens)

**Live Lens** gives you a realtime preview of your web projects without ever leaving vscode.

![GitHub Repo stars](https://img.shields.io/github/stars/BirukBelihu/live-lens?style=flat-square&logo=github)
![GitHub forks](https://img.shields.io/github/forks/BirukBelihu/live-lens?style=flat-square&logo=github)
![GitHub issues](https://img.shields.io/github/issues/BirukBelihu/live-lens?style=flat-square)
![GitHub License](https://img.shields.io/github/license/birukbelihu/live-lens)

---

## 📑 Table of Contents

- [Overview](#live-lens-for-visual-studio-code)
- [Features](#features)
- [Screenshots](#screenshots)
- [Settings](#settings)
- [Installation](#installation)
- [Contribute](#contribute)
- [License](#license)

---

## Features

- ⚡ **Instant Preview** → Live local server for Web(HTML/CSS/JS) projects  
- 🌍 **Browser or Inline Panel** → choose your preview mode  
- 🔄 **Auto Reload** → updates instantly when files change  
- 🔌 **Customizable Port** → default `5500`, can be changed in settings  
- 🖥️ **Seamless Integration** → status bar toggle + start/stop commands

---

## Screenshots

| ![Live Lens Screenshot 1](https://github.com/birukbelihu/live-lens/blob/master/images/live-lens-s1.png) | ![Live Lens Screenshot 1](https://github.com/birukbelihu/live-lens/blob/master/images/live-lens-s2.png) |
|:-------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|
|                                               **Inline**                                                |                                               **Browser**                                               |
| ![Live Lens Screenshot 3](https://github.com/birukbelihu/live-lens/blob/master/images/live-lens-s3.png) | ![Live Lens Screenshot 4](https://github.com/birukbelihu/live-lens/blob/master/images/live-lens-s4.png) |                                                                                         |
|                                               **Inline**                                                |                                               **Browser**                                               |
| ![Live Lens Screenshot 5](https://github.com/birukbelihu/live-lens/blob/master/images/live-lens-s5.png) | ![Live Lens Screenshot 6](https://github.com/birukbelihu/live-lens/blob/master/images/live-lens-s6.png) |                                                                                         |
|                                           **Command Pallet**                                            |                                              **Settings**                                               |

## Settings

Live Lens adds settings to customize preview behavior:

```jsonc
{
  "livelens.mode": "inline", // "inline" | "browser"
  "livelens.port": 5500       // server port number
}
```

| Setting | Type   | Default  | Description                                                                                                        |
|---------|--------|----------|--------------------------------------------------------------------------------------------------------------------|
| `mode`  | string | "inline" | Choose preview mode: `inline` opens in VS Code webview, `browser` opens in external browser(Chrome, Edge, Firefox) |
| `port`  | number | 5500     | Port number for the local preview server.                                                                          |

---

## Installation

1. Open the Extensions panel in **Visual Studio Code**  
   - `Ctrl+Shift+X` (Windows/Linux)  
   - `Cmd+Shift+X` (macOS)  
2. Search for [**Live Lens**](https://marketplace.visualstudio.com/items?itemName=birukbelihu.live-lens).  
3. **Install**.  

---

👉 [Install from Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=birukbelihu.live-lens)

---

## Contribute

Want to improve **Live Lens**? Contributions are welcome!  

- [Open an issue](https://github.com/birukbelihu/live-lens/issues)  
- [Submit a pull request](https://github.com/birukbelihu/live-lens/pulls)  

---

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](https://github.com/birukbelihu/live-lens/blob/master/LICENSE) file for details.
