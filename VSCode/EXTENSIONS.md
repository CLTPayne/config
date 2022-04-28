### Visual Studio Code Extensions

#### How to check what extensions are currently installed
Make sure the Code CLI is installed - https://code.visualstudio.com/docs/editor/command-line

You can see a list in the GUI too, but via the command line:
```
code --list-extensions
```

But to get a much more useful list run:
```
code --list-extensions | xargs -L 1 echo code --install-extension
```

#### To add an extension on another device
Simply run one or all lines of the above useful output with the extension name piped into the `--install-extension` command. 

#### Current Extensions in use (May 2022)
```
code --install-extension christian-kohler.path-intellisense
code --install-extension CoenraadS.bracket-pair-colorizer
code --install-extension Dart-Code.dart-code
code --install-extension Dart-Code.flutter
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension EditorConfig.EditorConfig
code --install-extension eg2.tslint
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-rename-tag
code --install-extension johnpapa.vscode-peacock
code --install-extension lostfields.nodejs-repl
code --install-extension maty.vscode-mocha-sidebar
code --install-extension mrmlnc.vscode-scss
code --install-extension ms-vscode.atom-keybindings
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension Orta.vscode-jest
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension timonwong.shellcheck
code --install-extension xabikos.JavaScriptSnippets
```


