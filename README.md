# Computer-Environment

### Overall

* Chrome
  * [Bookmark Sidebar](https://chrome.google.com/webstore/detail/bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh)
  * [MeetApps Google Calendar Video Call Links](https://chrome.google.com/webstore/detail/meetapps-google-calendar/jgliplolinicikblamobaaagffepghie)
  * [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
  * [Grammarly](https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen)
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

* Thor Launcher: App Store
* [Ice](https://github.com/jordanbaird/Ice)
* [InYourFace](https://www.inyourface.app/)
* [AppCleaner](https://freemacsoft.net/appcleaner/)
* [Tunnelblick: VPN](https://tunnelblick.net/)
* [Mounty: Read/Write NTFS](https://mac.filehorse.com/download-mounty/)
* [KeKa: Unzip](https://www.keka.io/en/)
* [Shifty: Night Shift](https://shifty.natethompson.io/en/)
* <s>Toothpicks: on App store</s>
* __iterm2__: `brew install iterm2`
  * Appearance &rarr; General &rarr; Status bar location
  * Appearance &rarr; Theme &rarr; Minimal
  * Profiles &rarr; Session &rarr; Status bar enabled
  * Keys &rarr; Hotkey &rarr; cmd + `
  * k8s on status bar: https://sig.gy/itermkube/
  * [kube-fzf](https://github.com/thecasualcoder/kube-fzf)
  * [kube-ps1](https://github.com/jonmosco/kube-ps1)
  * ```bash
    tailsvc () {
      svc=$(kubectl get svc --no-headers | fzf | awk '{print $1}')
    
      echo "kubectl logs -f --tail=200 svc/$svc"
      kubectl logs -f --tail=200 svc/$svc;
    }
    getyaml () {
      rsrc_type=${1:-pod}
      rsrc=$(kubectl get $rsrc_type --no-headers | fzf | awk '{print $1}')
    
      if [ -n "$rsrc" ]; then
        echo "kubectl get $rsrc_type $rsrc -o yaml";
        kubectl get $rsrc_type $rsrc -o yaml
      else
        echo "No resource selected."
      fi
    }
    ```
* [oh-my-zsh](https://ohmyz.sh/)
  * Plugin (`git clone <repo> $ZSH_CUSTOM/plugins/<repo>` or [Installation Guide Reference](https://gist.github.com/n1snt/454b879b8f0b7995740ae04c5fb5b7d))
    * [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting.git)
    * [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
    * [kube-ps1](https://github.com/jonmosco/kube-ps1)
    * [fzf-tab](https://github.com/Aloxaf/fzf-tab)
    * add `source <(kubectl completion zsh)` at the end of `.zshrc`
    ```bash
    plugins=(kube-ps1 git zsh-syntax-highlighting zsh-autosuggestions fzf-tab)
    ```
  * Apply zsh theme correctly
  ```bash
  conda config --set changeps1 False
  unset CONDA_PROMPT_MODIFIER
  mv pinhao1994.zsh-theme .oh-my-zsh/themes
  ```
* [Alfred](https://www.alfredapp.com/)
* [Raycast](https://www.raycast.com/): Alfred alternative
* [Itsycal](https://www.mowglii.com/itsycal/): Format - `E MMM dd  HH:mm`
* <s>[Spotify4BigSur](https://github.com/fabiusBile/Spotify4BigSur): alternative for SpotMenu </s>
* iShot: App Store; scrolling screenshot; (`cmd + shf + 4`)
* [Rectangle](https://rectangleapp.com/)
* All in One
  * [Ferdium](https://ferdium.org/) 
  * <s>[Ferdi](https://getferdi.com/): the open source Rambox with free dark mode</s>
  * <s>Rambox: [customize dark theme](https://github.com/pinhao1994/Computer-Environment/blob/master/Rambox) </s>  
  * Clovery: App Store; alternative for Rambox
* [WPS](https://www.wps.com/download/): free MS office alternative
* [Cyberduck](https://cyberduck.io/): free GCS / S3 / etc browser.


### Optional

* AllMyBatteries: on App store
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
  * [Studio 3T](https://studio3t.com/) for MongoDB
  * [BeeKeeper](https://www.beekeeperstudio.io/)
  * DataGrip
* <s>[Spotmenu](https://kmikiy.github.io/SpotMenu/) </s>
* Filezilla
* Adobe Acrobat DC
* WinRAR
* [Get Mi Home Devices Token](https://github.com/Maxmudjon/Get_MiHome_devices_token)
* OS Stats: 
  * [iStats](https://drive.google.com/file/d/1W7xyxoxytAIETmN7_25QXMbplDhBYAH9/view?usp=sharing): worth to buy it in X'mas or BlackFriday
  * [stats](https://github.com/exelban/stats): open source
  * <s>[MenuMeters](https://member.ipmu.jp/yuji.tachikawa/MenuMetersElCapitan/): raw base style</s>
