#!/bin/sh -v
# In Ubuntu 20.04 LTS (Focal Fossa) gedit's configurations are managed trough gsettings
# This script contains a preconfigured gedit schema and upon being ran sets the correct keys for that same schema
  
gsettings set org.gnome.gedit.preferences.editor auto-save-interval 'uint32 10'
gsettings set org.gnome.gedit.preferences.editor wrap-last-split-mode 'word'
gsettings set org.gnome.gedit.preferences.editor use-default-font true
gsettings set org.gnome.gedit.preferences.editor tabs-size 'uint32 4'
gsettings set org.gnome.gedit.preferences.editor auto-save false
gsettings set org.gnome.gedit.preferences.editor background-pattern 'grid'
gsettings set org.gnome.gedit.preferences.editor smart-home-end 'after'
gsettings set org.gnome.gedit.preferences.editor search-highlighting true
gsettings set org.gnome.gedit.preferences.editor scheme 'oblivion'
gsettings set org.gnome.gedit.preferences.editor editor-font 'Monospace 12'
gsettings set org.gnome.gedit.preferences.editor bracket-matching true
gsettings set org.gnome.gedit.preferences.editor syntax-highlighting true
gsettings set org.gnome.gedit.preferences.editor display-right-margin false
gsettings set org.gnome.gedit.preferences.editor insert-spaces false
gsettings set org.gnome.gedit.preferences.editor max-undo-actions 2000
gsettings set org.gnome.gedit.preferences.editor restore-cursor-position true
gsettings set org.gnome.gedit.preferences.editor highlight-current-line true
gsettings set org.gnome.gedit.preferences.editor display-line-numbers true
gsettings set org.gnome.gedit.preferences.editor auto-indent true
gsettings set org.gnome.gedit.preferences.editor wrap-mode 'none'
gsettings set org.gnome.gedit.preferences.editor ensure-trailing-newline true
gsettings set org.gnome.gedit.preferences.editor right-margin-position 'uint32 80'
gsettings set org.gnome.gedit.preferences.editor create-backup-copy false
gsettings set org.gnome.gedit.preferences.editor display-overview-map true
