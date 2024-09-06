# Terminal

## iterm2 - App Configuration

https://iterm2.com/

```bash
brew install iterm2
```

* Appearance &rarr; General &rarr; Status bar location
* Appearance &rarr; Theme &rarr; Minimal
* Profiles &rarr; Session &rarr; Status bar enabled
* Keys &rarr; Hotkey &rarr; `` cmd + ` ``
* (optional) k8s on status bar: https://sig.gy/itermkube/  

## oh-my-zsh

https://ohmyz.sh/

```
root
|- .zshrc
|- .zsh_conda
|- .zsh_myset
```

### Themes

```bash
conda config --set changeps1 False
unset CONDA_PROMPT_MODIFIER
mv pinhao1994.zsh-theme .oh-my-zsh/themes
```

### Plugins

```bash
plugins=(kube-ps1 git zsh-syntax-highlighting zsh-autosuggestions fzf-tab)
```

Plugin installation Ref: https://gist.github.com/n1snt/454b879b8f0b7995740ae04c5fb5b7d

OR

```bash
git clone <repo> $ZSH_CUSTOM/plugins/<repo>
```

* [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting.git)
* [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
* [kube-ps1](https://github.com/jonmosco/kube-ps1)
* [fzf-tab](https://github.com/Aloxaf/fzf-tab)
* Add `source <(kubectl completion zsh)` at the end of `.zshrc` for `kubectl` completion



## Packages

* [Homebrew](https://brew.sh/)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

* [miniconda](https://docs.conda.io/en/latest/miniconda.html)
  * Move the script at the bottom of `.bashrc` to `.zsh_conda` after installation.

```bash
function addjupkernel() {
  python -m ipykernel install --user --name=$1
}

conda-activate-fzf () {
  if [ -z "$1" ]; then
    env=$(conda env list | awk '{print $1}' | grep -v "#" | fzf)
    if [ -n "$env" ]; then
      conda activate "$env"
    else
      echo "No environment selected."
    fi
  else
    conda activate "$1"
  fi
  }
alias ca="conda-activate-fzf"
```

* [jq](https://jqlang.github.io/jq/)
* [kube-fzf](https://github.com/thecasualcoder/kube-fzf)

```bash
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
  
