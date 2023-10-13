# Computer-Environment

### Overall

* Chrome
  * [Bookmark Sidebar](https://chrome.google.com/webstore/detail/bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh)
  * [MeetApps Google Calendar Video Call Links](https://chrome.google.com/webstore/detail/meetapps-google-calendar/jgliplolinicikblamobaaagffepghie)
  * [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
* Java Env
* Spotify
* Line
* Sublime Text: [setup instruction](https://github.com/pinhao1994/Computer-Environment/blob/master/sublime-text.md)
* Dropbox
* PyCharm (`pycharm_settings.zip`)
  * Plugins
    * Atom Material Icons
    * JSON Formatter
    * Big Data File Viewer (or Big Data Tools)  
* <s>LastPass: both Chrome extension and on App Store</s>
* Bitwarden
* [Grammarly](https://app.grammarly.com) and chrome extension
* [miniconda](https://docs.conda.io/en/latest/miniconda.html)
  * Jupyter Lab/ Notebooks (Python 3)
  ```bash
  function addjupkernel() {
    python -m ipykernel install --user --name=$1
  }
  ```
  * Jupyter Viewer ([nbviewer](https://github.com/tuxu/nbviewer-app))
* Brew Install
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```  


---

### MacOS

* [AppCleaner](https://freemacsoft.net/appcleaner/)
* [Tunnelblick: VPN](https://tunnelblick.net/)
* [Mounty: Read/Write NTFS](https://mac.filehorse.com/download-mounty/)
* [KeKa: Unzip](https://www.keka.io/en/)
* [Shifty: Night Shift](https://shifty.natethompson.io/en/)
* <s>Toothpicks: on App store</s>
* OS Stats: 
  * [iStats](https://drive.google.com/file/d/1W7xyxoxytAIETmN7_25QXMbplDhBYAH9/view?usp=sharing): worth to buy it in X'mas or BlackFriday
  * [stats](https://github.com/exelban/stats): open source
  * [MenuMeters](https://member.ipmu.jp/yuji.tachikawa/MenuMetersElCapitan/): raw base style
* [oh-my-zsh](https://0n3z3r0n3.medium.com/oh-my-zsh-configuration-guide-for-macos-terminal-3ee6003b09d5)
  * apply zsh theme correctly
  ```bash
  conda config --set changeps1 False
  unset CONDA_PROMPT_MODIFIER
  mv pinhao1994.zsh-theme .oh-my-zsh/theme
  ```
  * Plugin
    * [zsh-completions](https://github.com/zsh-users/zsh-completions)
    * [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
* [Alfred](https://www.alfredapp.com/)
* [Itsycal](https://www.mowglii.com/itsycal/): Format - `E MMM dd  HH:mm`
* <s>[Spotify4BigSur](https://github.com/fabiusBile/Spotify4BigSur): alternative for SpotMenu </s>
* iterm2: `brew install iterm2`
  * Appearance &rarr; General &rarr; Status bar location
  * Appearance &rarr; Theme &rarr; Minimal
  * Keys &rarr; Hotkey &rarr; cmd + ` 
  * k8s on status bar: https://sig.gy/itermkube/
  * [kube-fzf](https://github.com/thecasualcoder/kube-fzf)
* iShot: App Store; scrolling screenshot; (`cmd + shf + 4`)
* [Rectangle](https://rectangleapp.com/)
* All in One
  * [Ferdium](https://ferdium.org/) 
  * <s>[Ferdi](https://getferdi.com/): the open source Rambox with free dark mode</s>
  * <s>Rambox: [customize dark theme](https://github.com/pinhao1994/Computer-Environment/blob/master/Rambox) </s>  
  * Clovery: App Store; alternative for Rambox
* [WPS](https://www.wps.com/download/): free MS office alternative
* [Raycast](https://www.raycast.com/): Alfred alternative


### Optional

* [Fliqlo](https://fliqlo.com/)
* MS office ([mac](https://drive.google.com/file/d/12FGjwn0kZY4fOZfkbsC_TfjWjPri1ohu/view?usp=sharing), windows)
* [LibreOffice](https://www.libreoffice.org/) 
* 1Checker
* Amphetamine: on App store
* <s>Xnip: switch to US App store</s>
* Customize Touch Bar (MacBook from 2016 - 2021)
  * [Pock](https://pock.dev/)
  * [MTMR](https://mtmr.app/): check [mtmr-items.json](https://github.com/pinhao1994/Computer-Environment/blob/master/mtmr-items.json) for the preset
* DataBase Management
  * [Sequel](http://www.sequelpro.com/)
  * [Mongo Compass](https://www.mongodb.com/try/download/compass)
  * [BeeKeeper](https://www.beekeeperstudio.io/)
  * DataGrip
* <s>[Spotmenu](https://kmikiy.github.io/SpotMenu/) </s>
* Filezilla
* Adobe Acrobat DC
* WinRAR
