args=("$@")
path=$(pwd)
if [ $# -eq 0 ]
then
	echo "No arguments supplied"
	exit 1
else
	for i;
	do
		if [ ! -d "$path/ex$i" ];
		then mkdir "ex$i"
		fi
	done
fi
