#!/bin/bash
DIR=`pwd`
CSSDIR="css"
JSDIR="js"
STYLE_FILE_NAME="style.css"
HTML_FILE_NAME="index.html"
JS_FILE_NAME="main.js"
if [ -d "$DIR/$1" ]
then
echo "the directory is already exist"
exit 1
else
mkdir $1
cd $1
mkdir $CSSDIR $JSDIR
echo "<DOCTYPE html>" > $HTML_FILE_NAME
echo "<title>Hello</title>" >> $HTML_FILE_NAME
echo "<h1>Hi</h1>" >> $HTML_FILE_NAME
cd $CSSDIR
echo "h1{color:red;}" > $STYLE_FILE_NAME
cd -
cd $JSDIR
echo -e "var string = \"Hello World\";" > $JS_FILE_NAME
echo "alert(string);" >> $JS_FILE_NAME
fi
