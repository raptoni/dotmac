#!/usr/bin/env bash

#TODO: update after macOS Catalina, default mac shell: bash is changing to zsh

###########################
# This script installs the dotfiles and runs all other system configuration scripts
# @author Adam Eivy
###########################

# include my library helpers for colorized echo and require_brew, etc
source ./lib_sh/echos.sh
source ./lib_sh/requirers.sh

bot "Hi! I'm going to install tooling and tweak your system settings. Here I go..."


bot "OS Configuration"
read -r -p "Do you want to update the system configurations? [y|N] " response
if [[ -z $response || $response =~ ^(n|N) ]]; then
  open /Applications/iTerm.app
  bot "All done"
  exit
fi 

source ./macos.sh

brew update && brew upgrade && brew cleanup && brew cask cleanup

bot "Woot! All done"
