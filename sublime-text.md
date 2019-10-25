# Sublime Text 3 Install Instruction
Reference Tutorial: https://packagecontrol.io/installation

`ctrl+` or `view > show console`

```Python
import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

`cmd + shift + p`

___Install Package___
* ChineseLocalizations
* ConvertToUTF8
* Codecs33 (only for MAC)
* Emmet
* jQuery
* SublimeCodeIntel
* JsFormat
* SublimeLinter
* SideBarEnhancements
* BracketHighlighter
* Color Highlighter
* AdvancedNewFile
* Clickable URL
* IMESupport (only for Win)

___Setting -- User___
```Json
{
	"hot_exit": true,
	"remember_open_files": true,
}
```

___Hotkey Setting___
```Json
[
	{ "keys": ["n", "n", "n"], "command": "advanced_new_file_new"},
	{
		"keys": ["p", "2"],
		"command": "set_layout",
		"args":
		{
			"cols": [0.0, 0.5, 1.0],
			"rows": [0.0, 1.0],
			"cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
		}
	},
	{
		"keys": ["p", "1"],
		"command": "set_layout",
		"args":
		{
			"cols": [0.0, 1.0],
			"rows": [0.0, 1.0],
			"cells": [[0, 0, 1, 1]]
		}
	},	
	{ "keys": ["f1", "f1"], "command": "fold_by_level", "args": {"level": 1} },
	{ "keys": ["f2", "f2"], "command": "fold_by_level", "args": {"level": 2} },

]
```

___Right Click___

Win: https://forum.sublimetext.com/t/right-click-open-folder-with-sublime-text/13970/4   

Mac: https://shellzero.wordpress.com/2014/09/10/how-to-add-open-in-sublime-text-service-to-any-folder-or-a-file-on-mac-shell-script/ 

___Theme___

Monokai Expanded.tmtheme: http://jsnwork.kiiuo.com/archives/1770/sublimetext-php-%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88-monokai%EF%BC%8C%E5%8F%AF%E4%BB%A5%E8%AE%93phphtml%E7%9A%84%E8%BE%A8%E8%AD%98%E5%BA%A6%E6%8F%90%E9%AB%98
