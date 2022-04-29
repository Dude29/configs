alias py="python3"

# Register pbpaste and pbcopy aliases to emulate Mac console copy and paste functionalities

# avoid running on OSX as pbpaste and pbcopy are already present there
if [[ "$OSTYPE" != "darwin"* ]]; then
	# for this to work xclip has to be installed
	alias pbcopy='xclip -selection clipboard'
	alias pbpaste='xclip -selection clipboard -o'
fi
